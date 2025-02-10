import axios, { AxiosResponse } from "axios";

const TIMEOUT = 10_000;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: TIMEOUT,
});

interface GetOptions {
  params?: Record<string, string | number | boolean | null | undefined>;
}

export const api = {
  get: async <T>(url: string, options?: GetOptions): Promise<T> => {
    const response: AxiosResponse<T> = await axiosInstance.get(url, {
      params: options?.params,
    });

    return response.data;
  },
};
