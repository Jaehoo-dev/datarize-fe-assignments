import { 구매금액_정렬 } from "@/domains/customer/types";
import { getCustomers } from "@/remotes/getCustomers";
import { useSuspenseQuery } from "@tanstack/react-query";

type Options = {
  sortBy?: 구매금액_정렬;
  name?: string;
};

export function useCustomers(options: Options = {}) {
  return useSuspenseQuery({
    queryKey: useCustomers.queryKey(options),
    queryFn: () => {
      return getCustomers(options);
    },
  });
}

useCustomers.queryKey = (options: Options) => {
  return ["customers", options];
};
