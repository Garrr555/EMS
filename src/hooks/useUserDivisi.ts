/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import CustomFetch from "../config/db";
import type { UserType } from "../types/type";

const useUserDivisi = ({ id }: { id: number }) => {
  const [divisis, setUserDivisi] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getUsersDivisi = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await CustomFetch.get(`/divisis/${id}/users`);

      setUserDivisi(response.data.divisis);
    } catch (error: any) {
      console.error(error);

      setError(
        error?.response?.data?.message || "Gagal mengambil data divisis",
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUsersDivisi();
  }, [getUsersDivisi]);

  return {
    divisis,
    loading,
    error,
    getUsersDivisi,
  };
};

export default useUserDivisi;
