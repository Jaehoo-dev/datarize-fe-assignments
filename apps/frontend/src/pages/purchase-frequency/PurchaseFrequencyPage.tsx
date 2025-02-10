import { Layout } from "@/components/Layout";
import { Suspense } from "react";
import { PurchaseFrequencyChart } from "./components/PurchaseFrequencyChart";
import { DateRangeForm } from "./components/DateRangeForm";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export function PurchaseFrequencyPage() {
  return (
    <Layout title="구매 빈도">
      <DateRangeForm />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className="mt-6 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          }
        >
          <PurchaseFrequencyChart />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
