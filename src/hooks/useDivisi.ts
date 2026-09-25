/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import CustomFetch from "../config/db";
import type { TagType } from "../types/type";

const useDivisi = () => {
  const [divisis, setDivisi] = useState<TagType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getDivisis = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await CustomFetch.get("/divisis");

      setDivisi(response.data.divisis);
    } catch (error: any) {
      console.error(error);

      setError(error?.response?.data?.message || "Gagal mengambil data divisis");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getDivisis();
  }, [getDivisis]);

  return {
    divisis,
    loading,
    error,
    getDivisis,
  };
};

export default useDivisi;
