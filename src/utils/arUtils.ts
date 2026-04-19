/**
 * AR Computer Vision Utilities
 * Includes Sobel edge detection, Hough transform, and coordinate estimation.
 */

export interface Point {
  x: number;
  y: number;
}

export interface Line {
  p1: Point;
  p2: Point;
  angle: number;
}

/**
 * Sobel Edge Detection
 * Converts RGB image data to grayscale and applies Sobel kernels.
 */
export function sobelEdgeDetect(imageData: ImageData, w: number, h: number): number[] {
  const gray = new Float32Array(w * h);
  const edges = new Float32Array(w * h);
  const d = imageData.data;
  
  for (let i = 0; i < w * h; i++) {
    gray[i] = 0.299 * d[i*4] + 0.587 * d[i*4+1] + 0.114 * d[i*4+2];
  }
  
  for (let y = 1; y < h-1; y++) {
    for (let x = 1; x < w-1; x++) {
      const gx = -gray[(y-1)*w+(x-1)] + gray[(y-1)*w+(x+1)]
                 -2*gray[y*w+(x-1)] + 2*gray[y*w+(x+1)]
                 -gray[(y+1)*w+(x-1)] + gray[(y+1)*w+(x+1)];
      const gy = -gray[(y-1)*w+(x-1)] - 2*gray[(y-1)*w+x] - gray[(y-1)*w+(x+1)]
                 +gray[(y+1)*w+(x-1)] + 2*gray[(y+1)*w+x] + gray[(y+1)*w+(x+1)];
      edges[y*w+x] = Math.sqrt(gx*gx + gy*gy);
    }
  }
  return Array.from(edges);
}

/**
 * Simplified Hough Line Detection Cluster
 */
export function detectVanishingPoints(edges: number[], w: number, h: number) {
  // Finding lines using a simplified scan for high-contrast straight-ish segments
  const lines: Line[] = [];
  const step = 20;
  
  for (let y = step; y < h - step; y += step) {
    for (let x = step; x < w - step; x += step) {
      if (edges[y * w + x] > 100) {
        // Sample surrounding to guess angle
        const gx = edges[y * w + (x + 1)] - edges[y * w + (x - 1)];
        const gy = edges[(y + 1) * w + x] - edges[(y - 1) * w + x];
        const angle = Math.atan2(gy, gx);
        lines.push({ p1: { x, y }, p2: { x: x + Math.cos(angle), y: y + Math.sin(angle) }, angle });
      }
    }
  }

  // Cluster lines into vertical and horizontal dominant groups
  const horizontalLines = lines.filter(l => Math.abs(l.angle) < Math.PI / 4 || Math.abs(l.angle) > 3 * Math.PI / 4);
  const verticalLines = lines.filter(l => Math.abs(l.angle) >= Math.PI / 4 && Math.abs(l.angle) <= 3 * Math.PI / 4);
  
  // Return centroid of horizontal/vertical focus points as VP candidates
  const vp1 = horizontalLines.length > 0 
    ? { 
        x: horizontalLines.reduce((s, l) => s + l.p1.x, 0) / horizontalLines.length, 
        y: horizontalLines.reduce((s, l) => s + l.p1.y, 0) / horizontalLines.length 
      }
    : { x: w / 2, y: h * 0.4 };

  const vp2 = verticalLines.length > 0
    ? {
        x: verticalLines.reduce((s, l) => s + l.p1.x, 0) / verticalLines.length,
        y: verticalLines.reduce((s, l) => s + l.p1.y, 0) / verticalLines.length
      }
    : { x: w / 2, y: -h }; // Infinity-ish vertically
    
  return { vp1, vp2 };
}

/**
 * Floor Line Detection
 */
export function detectFloorPlane(edges: number[], w: number, h: number) {
  let floorY = Math.floor(h * 0.65);
  let maxContrast = 0;
  // Scan lower part for strongest horizontal contrast boundary
  for (let y = Math.floor(h * 0.45); y < h * 0.85; y++) {
    let rowSum = 0;
    for (let x = 0; x < w; x++) rowSum += edges[y * w + x];
    if (rowSum > maxContrast) { 
      maxContrast = rowSum; 
      floorY = y; 
    }
  }
  return floorY;
}

/**
 * Vertical Wall/Corner Detection
 */
export function detectWalls(edges: number[], w: number, h: number) {
  const wallX: number[] = [];
  for (let x = Math.floor(w * 0.1); x < w * 0.9; x += 10) {
    let colSum = 0;
    for (let y = 0; y < h * 0.8; y++) colSum += edges[y * w + x];
    if (colSum > h * 25) wallX.push(x);
  }
  
  const clusters: number[] = [];
  let prev = -100;
  for (const x of wallX.sort((a,b) => a-b)) {
    if (x - prev > 30) clusters.push(x);
    prev = x;
  }
  return clusters.slice(0, 3);
}

/**
 * Estimates real-world size in millimeters
 */
export function estimateRealSize(
  pixelWidth: number, 
  pixelHeight: number, 
  placementY: number, 
  floorY: number, 
  canvasH: number
) {
  const normalizedDepth = (placementY - floorY) / (canvasH - floorY);
  const estimatedDistanceMm = 800 + normalizedDepth * 2500; // 0.8m to 3.3m
  const fovRad = 65 * Math.PI / 180;
  const pxPerMm = canvasH / (2 * estimatedDistanceMm * Math.tan(fovRad / 2));
  
  return {
    widthMm: Math.round(pixelWidth / pxPerMm),
    heightMm: Math.round(pixelHeight / pxPerMm)
  };
}

/**
 * Converts real dimensions to pixel size for rendering
 */
export function realToPixelSize(
  widthMm: number, 
  heightMm: number,
  placementY: number, 
  floorY: number, 
  canvasH: number
) {
  const normalizedDepth = Math.max(0, (placementY - floorY) / (canvasH - floorY));
  const distanceMm = 3300 - normalizedDepth * 2500;
  const fovRad = 65 * Math.PI / 180;
  const pxPerMm = canvasH / (2 * distanceMm * Math.tan(fovRad / 2));
  
  return {
    w: Math.round(widthMm * pxPerMm),
    h: Math.round(heightMm * pxPerMm)
  };
}
