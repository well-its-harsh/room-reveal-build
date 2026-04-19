import { useEffect, useMemo, useState, useRef } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowLeft, Star, Plus, Download, FileText, ChevronDown } from "lucide-react";
import { supabase } from "@/lib/supabase";
import BackButton from "@/components/BackButton";

// FIX 9 — Compare page with export (PDF/Word) functionality

function getDiscountPercent(): number {
  return 20;
}

export default function ComparePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const rawIds = searchParams.get("ids") || "";
  const ids = rawIds.split(",").filter(Boolean).slice(0, 3);
  const [exportOpen, setExportOpen] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["compare-products", ids],
    queryFn: async () => {
      if (ids.length === 0) return [];
      const { data, error } = await supabase
        .from("products")
        .select(`*, product_media(*), category:categories(name)`)
        .in("id", ids);
      if (error) {
        console.error("Compare products fetch error", error);
        return [];
      }
      return data || [];
    },
    enabled: ids.length > 0
  });

  const removeProduct = (id: string) => {
    const nextIds = ids.filter(x => x !== id);
    if (nextIds.length === 0) {
      navigate(-1);
    } else {
      setSearchParams({ ids: nextIds.join(",") });
    }
  };

  const orderedProducts = useMemo(() => {
    return ids.map(id => products.find((p: any) => p.id === id)).filter(Boolean);
  }, [ids, products]);

  // Close export dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (exportRef.current && !exportRef.current.contains(e.target as Node)) {
        setExportOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // FIX 9 — Export as PDF (print dialog)
  const handleExportPDF = () => {
    setExportOpen(false);
    window.print();
  };

  // FIX 9 — Export as Word Doc (.doc)
  const handleExportWord = () => {
    setExportOpen(false);
    const rows = orderedProducts.map((p: any) => {
      const mrp = Math.round(p.price / (1 - 20 / 100));
      const dims = [p.width, p.height, p.depth].filter(Boolean).join(" × ") + (p.width ? " mm" : "");
      return `
        <tr>
          <td style="border:1px solid #ccc;padding:8px;font-weight:bold;">${p.name}</td>
          <td style="border:1px solid #ccc;padding:8px;">₹${p.price?.toLocaleString("en-IN")} <br/><s>₹${mrp.toLocaleString("en-IN")}</s> – 20% OFF</td>
          <td style="border:1px solid #ccc;padding:8px;">${p.category?.name || "Hardware"}</td>
          <td style="border:1px solid #ccc;padding:8px;">${dims || "Standard"}</td>
          <td style="border:1px solid #ccc;padding:8px;">${p.rating_avg || "4.5"} ★</td>
        </tr>
      `;
    }).join("");

    const htmlTableContent = `
      <html><body>
        <h2 style="font-family:serif;">Product Comparison — Shree Radhe Tiles & Hardware</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:13px;">
          <thead>
            <tr style="background:#f5f5f5;">
              <th style="border:1px solid #ccc;padding:8px;text-align:left;">Product</th>
              <th style="border:1px solid #ccc;padding:8px;text-align:left;">Price</th>
              <th style="border:1px solid #ccc;padding:8px;text-align:left;">Category</th>
              <th style="border:1px solid #ccc;padding:8px;text-align:left;">Dimensions</th>
              <th style="border:1px solid #ccc;padding:8px;text-align:left;">Rating</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </body></html>
    `;

    const blob = new Blob([htmlTableContent], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "product-comparison.doc";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (isLoading) {
    return (
      <div className="container py-32 flex justify-center text-[#1A1A1A]">
        <div className="w-8 h-8 border-2 border-[#C8860A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (ids.length === 0) {
    return (
      <div className="container py-32 text-center text-[#1A1A1A]">
        <h2 className="font-serif text-[32px] font-bold mb-4">No Products Selected</h2>
        <p className="text-[#6B6B6B] mb-8">Please select products from any category page to compare them.</p>
        <Link to="/categories" className="px-6 py-3 bg-[#1A1A1A] text-white font-medium rounded hover:bg-[#333] transition">
          Browse Categories
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Print-specific styles */}
      <style>{`
        @media print {
          header, footer, .no-print, nav { display: none !important; }
          .compare-table { width: 100% !important; }
          body { margin: 0; padding: 16px; }
        }
      `}</style>

      <div className="bg-white min-h-screen pb-24">
        {/* HEADER */}
        <div className="bg-[#F7F5F2] pt-8 pb-10 border-b border-[#E8E4DF]">
          <div className="container">
            {/* FIX 9 — Back + Export row */}
            <div className="flex items-center justify-between mb-4 no-print">
              {/* FIX 8 — BackButton */}
              <BackButton />

              {/* FIX 9 — Export Dropdown */}
              <div className="relative" ref={exportRef}>
                <button
                  onClick={() => setExportOpen(v => !v)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#1A1A1A] text-white text-[13px] font-bold rounded hover:bg-[#333] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Export Comparison
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${exportOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {exportOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-2xl border border-[#E8E4DF] overflow-hidden z-50"
                    >
                      <button
                        onClick={handleExportPDF}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[13px] text-[#1A1A1A] hover:bg-[#F7F5F2] transition-colors"
                      >
                        <FileText className="w-4 h-4 text-[#C8860A]" />
                        Export as PDF
                      </button>
                      <div className="h-px bg-[#E8E4DF]" />
                      <button
                        onClick={handleExportWord}
                        className="w-full flex items-center gap-3 px-4 py-3 text-[13px] text-[#1A1A1A] hover:bg-[#F7F5F2] transition-colors"
                      >
                        <FileText className="w-4 h-4 text-[#6B6B6B]" />
                        Export as Word Doc
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-serif text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-2 tracking-tight">
                Compare Products
              </h1>
              <p className="text-[#6B6B6B] text-[15px]">Side-by-side analysis of your selected items.</p>
            </motion.div>
          </div>
        </div>

        <div className="container mt-12 overflow-x-auto pb-8 compare-table">
          <div className="min-w-[760px] flex gap-0 border-t border-l border-[#E8E4DF]">
            
            {/* Feature Keys Column */}
            <div className="w-[180px] flex-shrink-0 bg-[#F9F9F9] flex flex-col font-medium text-[13px] text-[#6B6B6B]">
              <div className="h-[280px] p-4 flex items-end pb-6 border-b border-r border-[#E8E4DF]">Product Name</div>
              <div className="h-[100px] p-4 flex items-center border-b border-r border-[#E8E4DF]">Pricing</div>
              <div className="h-12 p-4 flex items-center border-b border-r border-[#E8E4DF]">Category</div>
              <div className="h-12 p-4 flex items-center border-b border-r border-[#E8E4DF]">Dimensions</div>
              <div className="h-12 p-4 flex items-center border-b border-r border-[#E8E4DF]">Rating</div>
              <div className="h-[80px] p-4 flex items-center border-b border-r border-[#E8E4DF]">Actions</div>
            </div>

            {/* Product Columns */}
            {orderedProducts.map((p: any) => {
              const image = p.product_media?.[0]?.media_url || "/placeholder.svg";
              const mrp = Math.round(p.price / (1 - 20 / 100));
              const dims = [p.width, p.height, p.depth].filter(Boolean).join(" × ") + (p.width ? " mm" : "");

              return (
                <div key={p.id} className="flex-1 flex flex-col min-w-[240px] max-w-[320px]">
                  <div className="h-[280px] p-5 flex flex-col items-center justify-between border-b border-r border-[#E8E4DF] relative">
                    <button 
                      onClick={() => removeProduct(p.id)}
                      className="no-print absolute top-3 right-3 text-[11px] font-semibold text-red-500 hover:text-red-700 hover:underline"
                    >
                      Remove
                    </button>
                    <Link to={`/product/${p.id}`} className="block w-full flex-1 flex flex-col items-center group">
                      <div className="w-[140px] h-[140px] mb-4 p-2 bg-[#F7F5F2] rounded-lg">
                        <img src={image} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform" />
                      </div>
                      <h3 className="font-serif text-[16px] font-bold text-[#1A1A1A] text-center line-clamp-2 leading-tight group-hover:text-[#C8860A] transition">
                        {p.name}
                      </h3>
                    </Link>
                  </div>

                  <div className="h-[100px] p-4 flex flex-col items-center justify-center border-b border-r border-[#E8E4DF]">
                    <span className="text-[20px] font-bold text-[#1A1A1A]">₹{p.price.toLocaleString("en-IN")}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[13px] text-[#999] line-through">₹{mrp.toLocaleString("en-IN")}</span>
                      <span className="text-[12px] font-semibold text-emerald-600">20% OFF</span>
                    </div>
                  </div>

                  <div className="h-12 p-4 flex items-center justify-center border-b border-r border-[#E8E4DF] text-[13px] text-[#1A1A1A] font-medium">
                    {p.category?.name || "Hardware"}
                  </div>

                  <div className="h-12 p-4 flex items-center justify-center border-b border-r border-[#E8E4DF] text-[13px] text-[#1A1A1A]">
                    {dims || "Standard"}
                  </div>

                  <div className="h-12 p-4 flex items-center justify-center border-b border-r border-[#E8E4DF]">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 fill-[#C8860A] text-[#C8860A]" />
                      <span className="text-[13px] font-bold block">{p.rating_avg || "4.5"}</span>
                      <span className="text-[11px] text-[#6B6B6B]">({p.rating_count || 12})</span>
                    </div>
                  </div>

                  <div className="h-[80px] p-4 flex items-center justify-center border-b border-r border-[#E8E4DF]">
                    <Link 
                      to={`/product/${p.id}`}
                      className="px-6 py-2 border-2 border-[#1A1A1A] text-[#1A1A1A] text-[13px] font-bold hover:bg-[#1A1A1A] hover:text-white transition rounded"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* Empty placeholders */}
            {orderedProducts.length < 3 && Array.from({ length: 3 - orderedProducts.length }).map((_, i) => (
              <div key={`empty-${i}`} className="flex-1 flex flex-col min-w-[240px] max-w-[320px] bg-[#FAFAFA] border-r border-[#E8E4DF]">
                <div className="h-[280px] border-b border-[#E8E4DF] flex flex-col items-center justify-center relative">
                  <Link to="/categories" className="flex flex-col items-center gap-3 text-[#C8860A] hover:text-[#a56d05] transition group">
                    <div className="w-[80px] h-[80px] rounded-full border-2 border-dashed border-[#C8860A]/50 flex items-center justify-center group-hover:border-[#C8860A] group-hover:bg-[#C8860A]/5 transition">
                      <Plus className="w-8 h-8" />
                    </div>
                    <span className="text-[13px] font-bold uppercase tracking-wider">Add Product</span>
                  </Link>
                </div>
                <div className="h-[100px] border-b border-[#E8E4DF]" />
                <div className="h-12 border-b border-[#E8E4DF]" />
                <div className="h-12 border-b border-[#E8E4DF]" />
                <div className="h-12 border-b border-[#E8E4DF]" />
                <div className="h-[80px] border-b border-[#E8E4DF]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
