import { Suspense } from "react";
import { CustomersTable } from "./components/CustomersTable";
import { SearchForm } from "./components/SearchForm";
import { SortSelect } from "./components/SortSelect";

export function CustomersPage() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">고객 목록</h1>
      <main className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <SearchForm />
          <SortSelect />
        </div>
        {/* TODO: handle error state */}
        <Suspense fallback={<CustomersTable.Skeleton />}>
          <CustomersTable />
        </Suspense>
      </main>
    </div>
  );
}
