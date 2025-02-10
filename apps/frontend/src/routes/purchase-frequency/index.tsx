import { PurchaseFrequencyPage } from "@/pages/purchase-frequency/PurchaseFrequencyPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/purchase-frequency/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PurchaseFrequencyPage />;
}
