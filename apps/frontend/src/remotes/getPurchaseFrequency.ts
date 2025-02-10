import { api } from "@/libs/httpClient";

type Options = {
  from: Date;
  to: Date;
};

type PurchaseFrequencyResponse = Array<{
  range: string; // e.g. "20001 - 30000"
  count: number;
}>;

export function getPurchaseFrequency(options?: Options) {
  const params =
    options != null
      ? {
          from: options.from.toISOString(),
          to: options.to.toISOString(),
        }
      : {};

  return api.get<PurchaseFrequencyResponse>("/purchase-frequency", {
    params,
  });
}
