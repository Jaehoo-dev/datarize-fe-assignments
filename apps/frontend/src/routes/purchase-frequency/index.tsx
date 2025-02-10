import { PurchaseFrequencyPage } from "@/pages/purchase-frequency/PurchaseFrequencyPage";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/purchase-frequency/")({
  component: RouteComponent,
  validateSearch: z.object({
    range: z.string().optional(),
  }),
});

function RouteComponent() {
  return <PurchaseFrequencyPage />;
}
