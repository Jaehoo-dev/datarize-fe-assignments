import { api } from "@/libs/httpClient";

type PurchaseHistoryResponse = Array<{
  date: string; // e.g. "2025-02-10"
  quantity: number;
  product: string;
  price: number;
  imgSrc: string;
}>;

export async function getPurchaseHistory(customerId: number) {
  return await api.get<PurchaseHistoryResponse>(
    `/api/customers/${customerId}/purchases`,
  );
}
