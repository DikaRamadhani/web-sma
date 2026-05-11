"use client";

import NewsSection from "@/components/news/NewSection";
import HeroSection from "@/components/pages/home/HeroSection";
import GreetingSection from "@/components/pages/home/GreetingSection";
import TeachersSection from "@/components/pages/home/TeachersSection";
import StatsSection from "@/components/pages/home/StatsSection";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
      <GreetingSection />
      <TeachersSection />
      <StatsSection />
      <NewsSection />
    </main>
  );
}