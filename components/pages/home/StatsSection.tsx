"use client";

import CountUp from "react-countup";
import { schoolStatsConfig } from "@/lib/homeData";
import { GraduationCap, Users, BookOpen, UserCheck } from "lucide-react";
import { useInViewOnce } from "@/hook/useInViewOnce";

const iconMap = {
  students: Users,
  teachers: GraduationCap,
  programs: BookOpen,
  alumni: UserCheck,
};

export default function StatsSection() {
  const { ref, isInView } = useInViewOnce({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-brand-primary"
    >
      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-16 md:gap-24 lg:gap-40">
          {schoolStatsConfig.map((stat, index) => {
            const Icon = iconMap[stat.iconKey as keyof typeof iconMap] || Users;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 min-w-[200px]"
              >
                {/* Icon Container */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-white/10 rounded-full animate-pulse" />
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-xl">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
                    {isInView ? (
                      <CountUp end={stat.value} duration={2.5} />
                    ) : (
                      "0"
                    )}
                    <span className="text-brand-secondary">+</span>
                  </h3>
                  <p className="text-blue-100 font-medium uppercase tracking-widest text-xs md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
