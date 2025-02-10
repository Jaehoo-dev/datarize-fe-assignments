import { getPurchaseFrequency } from "@/remotes/getPurchaseFrequency";
import { useSuspenseQuery } from "@tanstack/react-query";

type Options = {
  from: Date;
  to: Date;
};

export function usePurchaseFrequency(options?: Options) {
  return useSuspenseQuery({
    queryKey: usePurchaseFrequency.queryKey(options),
    queryFn: () => {
      return getPurchaseFrequency(options);
    },
  });
}

usePurchaseFrequency.queryKey = (options?: Options) => {
  return ["purchase-frequency", options] as const;
};
