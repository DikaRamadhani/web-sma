import type { LucideIcon } from "lucide-react";

//Model konten untuk setiap slide yang ditampilkan di carousel halaman beranda.
export type HeroSlide = {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
};

// Kunci ikon stabil yang digunakan oleh konfigurasi data, kemudian dipetakan ke komponen ikon konkret di UI..
export type StatIconKey = "students" | "teachers" | "programs" | "alumni";

// Model statistik akhir yang siap digunakan UI dan dapat langsung dikonsumsi oleh komponen halaman.
export type SchoolStat = {
  label: string;
  value: number;
  icon: LucideIcon;
};

// Konfigurasi data ringan yang tetap dapat diserialisasi dan mudah dipelihara.
export type SchoolStatConfig = {
  label: string;
  value: number;
  iconKey: StatIconKey;
};
