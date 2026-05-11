"use client";

import { useEffect, useRef, useState } from "react";

// Opsi untuk mengatur kapan elemen dianggap masuk ke viewport.
type InViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

// Hook reusable untuk mendeteksi elemen saat terlihat, lalu aktif hanya sekali.
export function useInViewOnce<T extends HTMLElement>(options: InViewOptions = {}) {
  const { threshold = 0.25, rootMargin = "0px" } = options;
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isInView) {
      return;
    }

    // Pantau elemen: saat pertama kali terlihat, ubah status jadi true lalu hentikan observer.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, rootMargin, threshold]);

  // `ref` dipasang di elemen target, `isInView` dipakai untuk class animasi.
  return { ref, isInView };
}
