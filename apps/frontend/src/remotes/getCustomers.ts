import { ERROR_CODE } from "@/constants";
import { 구매금액_정렬 } from "@/domains/customer/types";
import { DatarizeError } from "@/errors/DatarizeError";
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
  try {
    return await api.get<CustomersResponse>("/api/customers", {
      params: options,
    });
  } catch (error) {
    if (
      DatarizeError.isDatarizeError(error) &&
      error.code === ERROR_CODE.NOT_FOUND &&
      error.reason === 검색결과_없음
    ) {
      return [];
    }

    throw error;
  }
}

const 검색결과_없음 = "Customer not found";
