"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useInViewOnce } from "@/hook/useInViewOnce";
import { cn } from "@/lib/utils";

// Arah animasi masuk yang didukung komponen.
type RevealDirection = "up" | "left" | "right";

// Props generic agar komponen bisa dirender sebagai elemen HTML apa pun (`div`, `p`, `h2`, dll).
type RevealOnScrollProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delayClassName?: string;
  threshold?: number;
  rootMargin?: string;
  direction?: RevealDirection;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

// Posisi awal (hidden state) berdasarkan arah animasi.
const hiddenByDirection: Record<RevealDirection, string> = {
  up: "translate-y-10",
  left: "-translate-x-8",
  right: "translate-x-8",
};

// Wrapper animasi reusable: elemen akan muncul halus saat masuk viewport.
export default function RevealOnScroll<T extends ElementType = "div">({
  as,
  children,
  className,
  delayClassName,
  threshold = 0.25,
  rootMargin = "0px",
  direction = "up",
  ...props
}: RevealOnScrollProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  // Gunakan hook observer sekali pakai agar animasi tidak berulang saat scroll bolak-balik.
  const { ref, isInView } = useInViewOnce<HTMLElement>({ threshold, rootMargin });

  return (
    <Tag
      ref={ref}
      className={cn(
        "will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        delayClassName,
        isInView ? "opacity-100 translate-x-0 translate-y-0 scale-100" : cn("opacity-0 scale-[0.98]", hiddenByDirection[direction]),
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
