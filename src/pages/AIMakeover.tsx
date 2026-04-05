import { useState, useCallback } from "react";
import { Upload, Sparkles, Palette, X, ShoppingBag, ArrowLeft, AlertCircle, Lightbulb, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const STYLES = ["Modern", "Traditional", "Minimalist", "Industrial", "Luxury", "Scandinavian"];
const PALETTES = ["Neutral", "Warm", "Cool", "Bold", "Monochrome"];
const CATEGORIES = ["Basin", "Shower", "Tiles", "Faucets", "Lighting", "Accessories"];

const API_KEY = "AIzaSyCngniw2WtyYR6C3FOYzxNM7ZuuP7_sejk";

interface ColorInfo {
  name: string;
  hex: string;
  usage: string;
}

interface FixtureRec {
  item: string;
  brand_suggestion?: string;
  description: string;
  reason: string;
  approx_price_inr?: string;
}

interface PriorityChange {
  rank: number;
  change: string;
  impact: string;
}

interface MaterialInfo {
  material: string;
  application: string;
  finish?: string;
}

interface MakeoverResult {
  overall_concept: string;
  current_assessment?: string;
  color_scheme: {
    primary: string | ColorInfo;
    secondary: string | ColorInfo;
    accent: string | ColorInfo;
  };
  fixture_recommendations: (FixtureRec | { item: string; description: string; reason: string })[];
  layout_suggestions: string;
  lighting_suggestions?: string;
  materials: (string | MaterialInfo)[];
  estimated_budget_range?: string;
  estimated_budget_range_inr?: string;
  priority_changes: (string | PriorityChange)[];
  products_to_search: string[];
}

export default function AIMakeover() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [styles, setStyles] = useState<string[]>([]);
  const [palette, setPalette] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<MakeoverResult | null>(null);
  const [rawFallback, setRawFallback] = useState<string>("");
  const [error, setError] = useState("");

  const handleImageDrop = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setError("Please upload a JPEG, PNG, or WebP image");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      setError("Image must be under 4MB");
      return;
    }
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setError("");
    setResult(null);
    setRawFallback("");
  }, []);

  const toggleStyle = (s: string) => {
    setStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : prev.length < 3 ? [...prev, s] : prev);
  };

  const toggleCategory = (c: string) => {
    setCategories(prev => prev.includes(c) ? prev.filter(x => x !== c) : [...prev, c]);
  };

  const generate = async () => {
    if (!image || styles.length === 0 || !palette) return;
    setLoading(true);
    setError("");
    setRawFallback("");
    setProgress(10);

    try {
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve((e.target?.result as string).split(",")[1]);
        reader.onerror = reject;
        reader.readAsDataURL(image);
      });

      setProgress(30);

      const mimeType = image.type || "image/jpeg";

      const prompt = `You are a world-class bathroom interior designer. Analyze this bathroom image carefully.

User preferences:
- Design style: ${styles.join(", ")}
- Color palette: ${palette}
- Focus areas: ${categories.length > 0 ? categories.join(", ") : "All areas"}

Provide a detailed redesign recommendation. Respond with ONLY valid JSON using this exact structure:

{
  "overall_concept": "2-3 sentence design vision for this specific bathroom",
  "current_assessment": "1-2 sentences about what you see in the current bathroom",
  "color_scheme": {
    "primary": {"name": "color name", "hex": "#hexcode", "usage": "where to use"},
    "secondary": {"name": "color name", "hex": "#hexcode", "usage": "where to use"},
    "accent": {"name": "color name", "hex": "#hexcode", "usage": "where to use"}
  },
  "fixture_recommendations": [
    {
      "item": "fixture name",
      "brand_suggestion": "brand name",
      "description": "specific recommendation",
      "reason": "why it suits this space",
      "approx_price_inr": "price range"
    }
  ],
  "layout_suggestions": "paragraph about spatial arrangement changes",
  "lighting_suggestions": "paragraph about lighting improvements",
  "materials": [
    {"material": "material name", "application": "where to use", "finish": "matte/glossy/etc"}
  ],
  "estimated_budget_range_inr": "₹X - ₹Y",
  "priority_changes": [
    {"rank": 1, "change": "most important change", "impact": "why this matters most"},
    {"rank": 2, "change": "second change", "impact": "impact"},
    {"rank": 3, "change": "third change", "impact": "impact"}
  ],
  "products_to_search": ["search term 1", "search term 2", "search term 3"]
}`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [
                { inline_data: { mime_type: mimeType, data: base64 } },
                { text: prompt },
              ],
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 2000,
              responseMimeType: "application/json",
            },
          }),
        }
      );

      setProgress(70);

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        console.error("Gemini API error:", response.status, errData);
        if (response.status === 429) throw new Error("You've reached the free API limit. Please try again in a minute.");
        if (response.status === 400) throw new Error("Image could not be processed. Please try a clearer bathroom photo (JPEG/PNG, under 4MB).");
        throw new Error("AI service temporarily unavailable. Please try again.");
      }

      const data = await response.json();
      const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!rawText) {
        const finishReason = data?.candidates?.[0]?.finishReason;
        if (finishReason === "SAFETY") {
          throw new Error("The image was flagged by safety filters. Please try a different bathroom photo.");
        }
        throw new Error("No response from AI. Please try again.");
      }

      setProgress(90);

      try {
        const cleanJson = rawText
          .replace(/^```json\s*/i, "")
          .replace(/^```\s*/i, "")
          .replace(/\s*```$/i, "")
          .trim();
        const parsed = JSON.parse(cleanJson);
        setResult(parsed);
      } catch {
        // JSON parse failed — show raw text as fallback
        setRawFallback(rawText);
      }
      setProgress(100);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Our AI stylist is busy, please try again";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const getColorHex = (color: string | ColorInfo): string => {
    if (typeof color === "object" && color.hex) return color.hex;
    if (typeof color === "string") {
      const match = color.match(/#[0-9a-fA-F]{6}/);
      return match ? match[0] : "#888888";
    }
    return "#888888";
  };

  const getColorLabel = (color: string | ColorInfo): string => {
    if (typeof color === "object") return `${color.name} — ${color.usage}`;
    return color;
  };

  const getBudget = (r: MakeoverResult) => r.estimated_budget_range_inr || r.estimated_budget_range || "";

  const reset = () => {
    setResult(null);
    setRawFallback("");
    setProgress(0);
    setError("");
  };

  return (
    <div className="container py-6 md:py-12 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 font-body">
        <ArrowLeft className="w-4 h-4" /> Back
      </Link>

      <div className="text-center mb-8">
        <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
        <h1 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-2">AI Bathroom Makeover</h1>
        <p className="text-muted-foreground font-body max-w-md mx-auto">
          Upload a photo of your bathroom and get personalized redesign suggestions powered by AI.
        </p>
      </div>

      {!result && !rawFallback ? (
        <div className="space-y-8">
          {/* Image Upload */}
          <div>
            <label className="text-sm font-medium font-body block mb-2">Upload Bathroom Photo *</label>
            {imagePreview ? (
              <div className="relative">
                <img src={imagePreview} alt="Bathroom" className="w-full max-h-64 object-cover rounded-xl" />
                <button
                  onClick={() => { setImage(null); setImagePreview(""); }}
                  className="absolute top-2 right-2 bg-background/80 rounded-full p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center h-48 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-accent/50 transition-colors">
                <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                <span className="text-sm text-muted-foreground font-body">Click to upload (JPEG/PNG/WebP, max 4MB)</span>
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={handleImageDrop} className="hidden" />
              </label>
            )}
          </div>

          {/* Style Selection */}
          <div>
            <label className="text-sm font-medium font-body block mb-2">Style Preference * (max 3)</label>
            <div className="flex flex-wrap gap-2">
              {STYLES.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleStyle(s)}
                  className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                    styles.includes(s)
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Color Palette */}
          <div>
            <label className="text-sm font-medium font-body block mb-2">Color Palette *</label>
            <div className="flex flex-wrap gap-2">
              {PALETTES.map((p) => (
                <button
                  key={p}
                  onClick={() => setPalette(p)}
                  className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                    palette === p
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Focus Categories */}
          <div>
            <label className="text-sm font-medium font-body block mb-2">Focus Areas (optional)</label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => toggleCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-body transition-colors ${
                    categories.includes(c)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-destructive text-sm font-body bg-destructive/10 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4 flex-shrink-0" /> {error}
            </div>
          )}

          {loading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground font-body text-center">
                {progress < 30 ? "Preparing image..." : progress < 70 ? "AI is analyzing your bathroom..." : "Generating recommendations..."}
              </p>
            </div>
          )}

          <Button
            onClick={generate}
            disabled={!image || styles.length === 0 || !palette || loading}
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {loading ? "Generating..." : "Generate Makeover"}
          </Button>
        </div>
      ) : rawFallback ? (
        /* Raw text fallback when JSON parsing fails */
        <div className="space-y-6">
          {imagePreview && <img src={imagePreview} alt="Original" className="w-full max-h-48 object-cover rounded-xl" />}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-2">AI Design Suggestions</h2>
            <p className="text-xs text-muted-foreground font-body mb-3">Structured display unavailable — showing raw response</p>
            <div className="text-sm text-foreground font-body whitespace-pre-wrap leading-relaxed">{rawFallback}</div>
          </div>
          <Button onClick={reset} variant="outline" className="w-full font-body">
            Try Another Style
          </Button>
        </div>
      ) : result ? (
        /* Structured Results */
        <div className="space-y-8">
          {imagePreview && <img src={imagePreview} alt="Original" className="w-full max-h-48 object-cover rounded-xl" />}

          {/* Concept */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-2">Design Vision</h2>
            <p className="text-foreground font-body leading-relaxed">{result.overall_concept}</p>
            {result.current_assessment && (
              <p className="text-sm text-muted-foreground font-body mt-2">{result.current_assessment}</p>
            )}
          </div>

          {/* Color Scheme */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Color Scheme</h2>
            <div className="grid grid-cols-3 gap-4">
              {(["primary", "secondary", "accent"] as const).map((key) => {
                const color = result.color_scheme[key];
                return (
                  <div key={key} className="text-center">
                    <div
                      className="w-full h-16 rounded-lg mb-2 border border-border"
                      style={{ backgroundColor: getColorHex(color) }}
                    />
                    <p className="text-xs text-muted-foreground font-body capitalize font-medium">{key}</p>
                    <p className="text-xs font-body text-foreground mt-0.5">{getColorLabel(color)}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Fixtures */}
          {result.fixture_recommendations?.length > 0 && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Fixture Recommendations</h2>
              <div className="space-y-3">
                {result.fixture_recommendations.map((rec, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-start justify-between">
                      <h3 className="font-heading text-sm font-semibold text-foreground">{rec.item}</h3>
                      {"approx_price_inr" in rec && rec.approx_price_inr && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full font-body">{rec.approx_price_inr}</span>
                      )}
                    </div>
                    {"brand_suggestion" in rec && rec.brand_suggestion && (
                      <p className="text-[10px] text-accent font-body font-semibold uppercase tracking-wider mt-0.5">{rec.brand_suggestion}</p>
                    )}
                    <p className="text-sm text-muted-foreground font-body mt-1">{rec.description}</p>
                    <p className="text-xs text-accent font-body mt-1">Why: {rec.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Materials */}
          {result.materials?.length > 0 && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Suggested Materials</h2>
              <div className="flex flex-wrap gap-2">
                {result.materials.map((m, i) => {
                  const label = typeof m === "string" ? m : `${m.material} (${m.application})`;
                  return (
                    <span key={i} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-body">{label}</span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Layout Suggestions */}
          {result.layout_suggestions && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-2">Layout Suggestions</h2>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{result.layout_suggestions}</p>
            </div>
          )}

          {/* Lighting */}
          {result.lighting_suggestions && (
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-accent" />
                <h2 className="font-heading text-lg font-semibold text-foreground">Lighting</h2>
              </div>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{result.lighting_suggestions}</p>
            </div>
          )}

          {/* Priority Changes */}
          {result.priority_changes?.length > 0 && (
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Priority Changes</h2>
              <ol className="space-y-3">
                {result.priority_changes.map((c, i) => {
                  const isObj = typeof c === "object";
                  const text = isObj ? c.change : c;
                  const impact = isObj ? c.impact : undefined;
                  const rank = isObj ? c.rank : i + 1;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">{rank}</span>
                      <div>
                        <p className="text-sm font-body text-foreground font-medium">{text}</p>
                        {impact && <p className="text-xs text-muted-foreground font-body mt-0.5">{impact}</p>}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          )}

          {/* Budget */}
          {getBudget(result) && (
            <div className="bg-accent/10 rounded-xl p-6 text-center">
              <DollarSign className="w-6 h-6 text-accent mx-auto mb-1" />
              <p className="text-sm text-muted-foreground font-body">Estimated Budget</p>
              <p className="font-heading text-xl font-bold text-accent">{getBudget(result)}</p>
            </div>
          )}

          {/* Shop Links */}
          {result.products_to_search?.length > 0 && (
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Shop Recommendations</h2>
              <div className="flex flex-wrap gap-2">
                {result.products_to_search.map((term, i) => (
                  <Link
                    key={i}
                    to={`/products?search=${encodeURIComponent(term)}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-body hover:bg-accent/90 transition-colors"
                  >
                    <ShoppingBag className="w-3 h-3" /> {term}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <Button onClick={reset} variant="outline" className="w-full font-body">
            Try Another Style
          </Button>
        </div>
      ) : null}
    </div>
  );
}
