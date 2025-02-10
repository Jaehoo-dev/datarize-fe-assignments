import { Table } from "@/components/Table";
import { useCustomers } from "../hooks/useCustomers";
import { twMerge } from "tailwind-merge";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { useNavigate, useSearch } from "@tanstack/react-router";

export function CustomersTable() {
  const navigate = useNavigate({ from: "/customers" });
  const { name, sortBy } = useSearch({ from: "/customers/" });
  const { data: customers } = useCustomers({ name, sortBy });

  return (
    <Table.Root>
      <TableHeader />
      <Table.Body>
        {customers.map((customer, index) => {
          const 짝수번째_행인가 = index % 2 !== 0;

          return (
            <Table.Row
              key={customer.id}
              className={twMerge(
                "cursor-pointer hover:bg-gray-200",
                짝수번째_행인가 ? "bg-gray-100" : "",
              )}
              onClick={() => {
                navigate({
                  to: "/customers/$customerId/purchases",
                  params: {
                    customerId: customer.id.toString(),
                  },
                });
              }}
            >
              <Table.Cell>{customer.id}</Table.Cell>
              <Table.Cell>{customer.name}</Table.Cell>
              <Table.Cell align="right">
                {customer.count.toLocaleString()}회
              </Table.Cell>
              <Table.Cell align="right">
                {customer.totalAmount.toLocaleString()}원
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table.Root>
  );
}

function TableHeader() {
  return (
    <Table.Header>
      <Table.HeaderCell>ID</Table.HeaderCell>
      <Table.HeaderCell>이름</Table.HeaderCell>
      <Table.HeaderCell>총 구매 횟수</Table.HeaderCell>
      <Table.HeaderCell>총 구매 금액</Table.HeaderCell>
    </Table.Header>
  );
}

CustomersTable.Skeleton = function CustomersTableSkeleton() {
  return (
    <Table.Root>
      <TableHeader />
      <Table.Body>
        <Table.Row>
          <Table.Cell colSpan={4}>
            <div className="flex items-center justify-center">
              <LoadingSpinner />
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};
