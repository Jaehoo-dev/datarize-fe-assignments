import { api } from "@/libs/httpClient";

type Options = {
  from: Date;
  to: Date;
};

type PurchaseFrequencyResponse = Array<{
  range: string; // e.g. "20001 - 30000"
  count: number;
}>;

export async function getPurchaseFrequency(options?: Options) {
  const params =
    options != null
      ? {
          from: options.from.toISOString(),
          to: options.to.toISOString(),
        }
      : {};

  return await api.get<PurchaseFrequencyResponse>("/api/purchase-frequency", {
    params,
  });
}
