"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: string;
  imageUrl: string;
  alt: string;
  breadcrumbs?: BreadcrumbItem[];
};

export default function PageHero({
  title,
  imageUrl,
  alt,
  breadcrumbs,
}: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full scale-110"
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/40 to-slate-950/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 text-center space-y-6 pt-16 md:pt-20">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center justify-center gap-2 text-white/70 text-xs md:text-sm mb-4">
            <Link
              href="/"
              className="hover:text-brand-secondary transition-colors flex items-center gap-1"
            >
              <Home size={14} /> Beranda
            </Link>
            {breadcrumbs.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-white/30" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-secondary font-bold">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight drop-shadow-2xl"
        >
          {title}
        </motion.h1>

        {/* Decorative underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-1.5 bg-brand-primary mx-auto rounded-full shadow-[0_0_15px_rgba(29,78,216,0.5)]"
        />
      </div>
    </section>
  );
}
