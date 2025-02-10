import { Layout } from "@/components/Layout";
import { Suspense } from "react";
import { PurchaseFrequencyChart } from "./components/PurchaseFrequencyChart";
import { RangeForm } from "./components/RangeForm";

export function PurchaseFrequencyPage() {
  return (
    <Layout title="구매 빈도">
      <RangeForm />
      <Suspense fallback={<PurchaseFrequencyChart.Skeleton />}>
        <PurchaseFrequencyChart />
      </Suspense>
    </Layout>
  );
}
