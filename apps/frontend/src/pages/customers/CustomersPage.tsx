import { Suspense } from "react";
import { CustomersTable } from "./components/CustomersTable";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { SearchForm } from "./components/SearchForm";
import { SortSelect } from "./components/SortSelect";

export function CustomersPage() {
  const { name: nameSearchParam } = useSearch({ from: "/customers/" });
  const navigate = useNavigate({ from: "/customers" });

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">고객 목록</h1>
      <main className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <SearchForm
            defaultName={nameSearchParam ?? ""}
            onSubmit={(name) => {
              navigate({
                search: { name },
                replace: true,
              });
            }}
          />
          <SortSelect />
        </div>
        {/* TODO: handle error state */}
        <Suspense fallback={<CustomersTable.Skeleton />}>
          <CustomersTable name={nameSearchParam} />
        </Suspense>
      </main>
    </div>
  );
}
