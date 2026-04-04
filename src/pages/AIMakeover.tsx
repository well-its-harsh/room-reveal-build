import { useState, useCallback } from "react";
import { Upload, Sparkles, Palette, X, ShoppingBag, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const STYLES = ["Modern", "Traditional", "Minimalist", "Industrial", "Luxury", "Scandinavian"];
const PALETTES = ["Neutral", "Warm", "Cool", "Bold", "Monochrome"];
const CATEGORIES = ["Basin", "Shower", "Tiles", "Faucets", "Lighting", "Accessories"];

const API_KEY = "AIzaSyCngniw2WtyYR6C3FOYzxNM7ZuuP7_sejk";

interface MakeoverResult {
  overall_concept: string;
  color_scheme: { primary: string; secondary: string; accent: string };
  fixture_recommendations: { item: string; description: string; reason: string }[];
  layout_suggestions: string;
  materials: string[];
  estimated_budget_range: string;
  priority_changes: string[];
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
  const [error, setError] = useState("");

  const handleImageDrop = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
      setError("Image must be under 4MB");
      return;
    }
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setError("");
    setResult(null);
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
    setProgress(10);

    try {
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve((e.target?.result as string).split(",")[1]);
        reader.readAsDataURL(image);
      });

      setProgress(30);

      const prompt = `You are an expert interior designer specializing in bathrooms.
Analyze this bathroom image and provide a detailed redesign recommendation.

Selected style: ${styles.join(", ")}
Color palette preference: ${palette}
Focus areas: ${categories.length > 0 ? categories.join(", ") : "All areas"}

Respond in this EXACT JSON format (no markdown, no extra text):
{
  "overall_concept": "2-3 sentence design vision",
  "color_scheme": {
    "primary": "color name and hex",
    "secondary": "color name and hex",
    "accent": "color name and hex"
  },
  "fixture_recommendations": [
    {"item": "item name", "description": "specific recommendation", "reason": "why this fits"}
  ],
  "layout_suggestions": "paragraph about spatial changes",
  "materials": ["material 1", "material 2", "material 3"],
  "estimated_budget_range": "INR range",
  "priority_changes": ["change 1", "change 2", "change 3"],
  "products_to_search": ["search term 1", "search term 2"]
}`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [
                { inline_data: { mime_type: image.type || "image/jpeg", data: base64 } },
                { text: prompt },
              ],
            }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 1500 },
          }),
        }
      );

      setProgress(70);

      if (!response.ok) {
        if (response.status === 429) throw new Error("Rate limit reached. Please try again in a minute.");
        throw new Error("AI service unavailable. Please try again.");
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("No response from AI");

      setProgress(90);
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setResult(parsed);
      setProgress(100);
    } catch (err: any) {
      setError(err.message || "Our AI stylist is busy, please try again");
    } finally {
      setLoading(false);
    }
  };

  const extractHex = (colorStr: string) => {
    const match = colorStr?.match(/#[0-9a-fA-F]{6}/);
    return match ? match[0] : "#888888";
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

      {!result ? (
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
                <span className="text-sm text-muted-foreground font-body">Click to upload (max 4MB)</span>
                <input type="file" accept="image/*" onChange={handleImageDrop} className="hidden" />
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
            <div className="flex items-center gap-2 text-destructive text-sm font-body">
              <AlertCircle className="w-4 h-4" /> {error}
            </div>
          )}

          {loading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground font-body text-center">Analyzing your space...</p>
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
      ) : (
        /* Results */
        <div className="space-y-8">
          {/* Original Image */}
          {imagePreview && (
            <img src={imagePreview} alt="Original" className="w-full max-h-48 object-cover rounded-xl" />
          )}

          {/* Concept */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-2">Design Vision</h2>
            <p className="text-muted-foreground font-body">{result.overall_concept}</p>
          </div>

          {/* Color Scheme */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Color Scheme</h2>
            <div className="grid grid-cols-3 gap-4">
              {(["primary", "secondary", "accent"] as const).map((key) => (
                <div key={key} className="text-center">
                  <div
                    className="w-full h-16 rounded-lg mb-2"
                    style={{ backgroundColor: extractHex(result.color_scheme[key]) }}
                  />
                  <p className="text-xs text-muted-foreground font-body capitalize">{key}</p>
                  <p className="text-xs font-body text-foreground">{result.color_scheme[key]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fixtures */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Fixture Recommendations</h2>
            <div className="space-y-3">
              {result.fixture_recommendations?.map((rec, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4">
                  <h3 className="font-heading text-sm font-semibold text-foreground">{rec.item}</h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">{rec.description}</p>
                  <p className="text-xs text-accent font-body mt-1">Why: {rec.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Suggested Materials</h2>
            <div className="flex flex-wrap gap-2">
              {result.materials?.map((m, i) => (
                <span key={i} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-body">{m}</span>
              ))}
            </div>
          </div>

          {/* Priority Changes */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Priority Changes</h2>
            <ol className="space-y-2">
              {result.priority_changes?.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-body text-foreground">
                  <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</span>
                  {c}
                </li>
              ))}
            </ol>
          </div>

          {/* Budget */}
          <div className="bg-accent/10 rounded-xl p-6 text-center">
            <p className="text-sm text-muted-foreground font-body">Estimated Budget</p>
            <p className="font-heading text-xl font-bold text-accent">{result.estimated_budget_range}</p>
          </div>

          {/* Shop Links */}
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Shop Recommendations</h2>
            <div className="flex flex-wrap gap-2">
              {result.products_to_search?.map((term, i) => (
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

          <Button onClick={() => { setResult(null); setProgress(0); }} variant="outline" className="w-full font-body">
            Try Another Style
          </Button>
        </div>
      )}
    </div>
  );
}
