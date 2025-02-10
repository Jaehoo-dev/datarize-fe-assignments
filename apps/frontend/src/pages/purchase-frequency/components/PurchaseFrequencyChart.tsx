import { usePurchaseFrequency } from "../hooks/usePurchaseFrequency";

export function PurchaseFrequencyChart() {
  const { data } = usePurchaseFrequency();

  return <div>{JSON.stringify(data)}</div>;
}

PurchaseFrequencyChart.Skeleton = function PurchaseFrequencyChartSkeleton() {
  return <div></div>;
};
