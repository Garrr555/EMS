/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import CustomFetch from "../config/db";
import type { TagType } from "../types/type";

const useTags = () => {
  const [tags, setTags] = useState<TagType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getTags = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await CustomFetch.get("/tags");

      setTags(response.data.tags);
    } catch (error: any) {
      console.error(error);

      setError(error?.response?.data?.message || "Gagal mengambil data tags");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTags();
  }, [getTags]);

  return {
    tags,
    loading,
    error,
    getTags,
  };
};

export default useTags;
