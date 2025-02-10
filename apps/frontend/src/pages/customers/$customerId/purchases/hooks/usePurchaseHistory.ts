import { getPurchaseHistory } from "@/remotes/getPurchaseHistory";
import { useSuspenseQuery } from "@tanstack/react-query";

export function usePurchaseHistory(customerId: number) {
  return useSuspenseQuery({
    queryKey: usePurchaseHistory.queryKey(customerId),
    queryFn: () => {
      return getPurchaseHistory(customerId);
    },
  });
}

usePurchaseHistory.queryKey = (customerId: number) => {
  return ["customers", customerId, "purchases"] as const;
};
