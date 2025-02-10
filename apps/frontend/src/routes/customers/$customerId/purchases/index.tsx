import { CustomerPurchasesPage } from "@/pages/customers/$customerId/purchases/CustomerPurchasesPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customers/$customerId/purchases/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CustomerPurchasesPage />;
}
