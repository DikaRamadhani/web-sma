"use client";

import { useEffect, useState } from "react";
import { News } from "@/types/type";
import { fetchNewsList } from "@/lib/newsApi";

export const useNews = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetchNewsList();
        setNews(data);
      } catch (error) {
        console.error(error);
        setError("Gagal Mengambil Berita.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};
