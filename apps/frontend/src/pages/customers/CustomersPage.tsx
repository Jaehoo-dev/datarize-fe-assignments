import { Suspense } from "react";
import { CustomersTable } from "./components/CustomersTable";
import { SearchForm } from "./components/SearchForm";
import { SortSelect } from "./components/SortSelect";
import { Layout } from "@/components/Layout";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export function CustomersPage() {
  return (
    <Layout title="고객 목록">
      <div className="flex flex-row items-center justify-between">
        <SearchForm />
        <SortSelect />
      </div>
      <ErrorBoundary>
        <Suspense fallback={<CustomersTable.Skeleton />}>
          <CustomersTable />
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
}
