import { Layout } from "@/components/Layout";
import { Suspense } from "react";
import { PurchaseHistory } from "./components/PurchaseHistory";

export function CustomerPurchasesPage() {
  return (
    <Layout title="구매 내역">
      {/* TODO: handle error state */}
      <Suspense fallback={<PurchaseHistory.Skeleton />}>
        <PurchaseHistory />
      </Suspense>
    </Layout>
  );
}
