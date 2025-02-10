import { createFileRoute } from "@tanstack/react-router";
import { PurchaseFrequencyPage } from "../../pages/purchase-frequency/PurchaseFrequencyPage";

export const Route = createFileRoute("/purchase-frequency/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <PurchaseFrequencyPage />;
}
