import { Layout } from "@/components/Layout";
import { Suspense } from "react";
import { PurchaseHistory } from "./components/PurchaseHistory";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export function CustomerPurchasesPage() {
  return (
    <Layout title="구매 내역">
      <ErrorBoundary>
        <Suspense fallback={<PurchaseHistory.Skeleton />}>
          <PurchaseHistory />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
