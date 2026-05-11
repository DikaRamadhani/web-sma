"use client";

import { useNews } from "@/hook/useNews";
import NewsCard from "./NewsCard";
import RevealOnScroll from "../animations/RevealOnScroll";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";

export default function NewsSection() {
  const { news, loading, error } = useNews();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <RevealOnScroll direction="left" className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-surface-alt border border-brand-primary/10">
              <Newspaper size={16} className="text-brand-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">Update Terkini</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900">
              Berita & <span className="text-brand-primary">Kegiatan Sekolah</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Ikuti terus perkembangan informasi, prestasi, dan agenda terbaru dari SMA Negeri 1 Bangunrejo.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll direction="right">
            <Link 
              href="/main/berita" 
              className="group flex items-center gap-2 bg-slate-900 hover:bg-brand-primary text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-xl hover:shadow-brand-primary/20 active:scale-95"
            >
              Lihat Semua Berita 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            // Simple loading placeholders
            [1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse space-y-4">
                <div className="bg-slate-200 aspect-[16/10] rounded-2xl" />
                <div className="h-6 bg-slate-200 rounded w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-1/2" />
              </div>
            ))
          ) : error ? (
            <div className="col-span-full text-center py-10 text-red-500 font-medium">
              Gagal memuat berita: {error}
            </div>
          ) : (
            news.slice(0, 3).map((item, index) => (
              <RevealOnScroll 
                key={item.ID} 
                direction="up" 
                delayClassName={`delay-${index * 100}`}
              >
                <NewsCard news={item} />
              </RevealOnScroll>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
