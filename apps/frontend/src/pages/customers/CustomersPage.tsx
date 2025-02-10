import { Suspense } from "react";
import { CustomersTable } from "./components/CustomersTable";

export function CustomersPage() {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">고객 목록</h1>
      {/* TODO: handle error state */}
      <Suspense fallback={<CustomersTable.Skeleton />}>
        <CustomersTable />
      </Suspense>
    </div>
  );
}
