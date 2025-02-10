import { CustomersPage } from "@/pages/customers/CustomersPage";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/customers/")({
  component: RouteComponent,
  validateSearch: z.object({
    name: z.string().optional(),
  }),
});

function RouteComponent() {
  return <CustomersPage />;
}
