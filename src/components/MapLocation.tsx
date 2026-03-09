import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default marker icon issue
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface MapLocationProps {
  lat?: number;
  lng?: number;
  shopName?: string;
  className?: string;
}

export default function MapLocation({
  lat = 19.076,
  lng = 72.8777,
  shopName = "BathHaus Store",
  className = "",
}: MapLocationProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView([lat, lng], 15);
    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(`<strong>${shopName}</strong>`)
      .openPopup();

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [lat, lng, shopName]);

  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
  };

  return (
    <div className={className}>
      <div ref={mapRef} className="w-full h-full rounded-lg" style={{ minHeight: "250px" }} />
      <button
        onClick={handleGetDirections}
        className="mt-3 w-full text-sm font-medium text-accent hover:text-accent/80 font-body flex items-center justify-center gap-1 py-2 bg-secondary rounded-lg transition-colors"
      >
        📍 Get Directions
      </button>
    </div>
  );
}
