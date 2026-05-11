"use client";

import { useEffect, useState } from "react";
import { News } from "@/types/type";
import { fetchNewsBySlug } from "@/lib/newsApi";

type UseNewsDetailResult = {
  news?: News;
  loading: boolean;
  error: string | null;
};

export function useNewsDetail(slug: string): UseNewsDetailResult {
  const [news, setNews] = useState<News>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError("News slug is missing.");
      return;
    }

    const getNews = async () => {
      try {
        const data = await fetchNewsBySlug(slug);
        setNews(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load news detail.");
      } finally {
        setLoading(false);
      }
    };

    void getNews();
  }, [slug]);

  return { news, loading, error };
}
