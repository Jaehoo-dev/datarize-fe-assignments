import { 구매금액_정렬 } from "@/domains/customer/types";
import { CustomersPage } from "@/pages/customers/CustomersPage";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/customers/")({
  component: RouteComponent,
  validateSearch: z.object({
    name: z.string().optional(),
    sortBy: z.nativeEnum(구매금액_정렬).optional(),
  }),
});

function RouteComponent() {
  return <CustomersPage />;
}
