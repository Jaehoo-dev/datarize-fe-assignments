import { 구매금액_정렬 } from "@/domains/customer/types";
import { api } from "@/libs/httpClient";

type Options = {
  sortBy?: 구매금액_정렬;
  name?: string;
};

type CustomersResponse = Array<{
  id: number;
  name: string;
  count: number;
  totalAmount: number;
}>;

export async function getCustomers(options: Options = {}) {
  return api.get<CustomersResponse>("/api/customers", {
    params: options,
  });
}
