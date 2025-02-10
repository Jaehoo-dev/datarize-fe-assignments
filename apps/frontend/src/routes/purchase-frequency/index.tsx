import { PurchaseFrequencyPage } from "@/pages/purchase-frequency/PurchaseFrequencyPage";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

export const Route = createFileRoute("/purchase-frequency/")({
  component: RouteComponent,
  validateSearch: z.union([
    z.object({
      from: z.string().date(),
      to: z.string().date(),
    }),
    z.object({}).strict(),
  ]),
});

function RouteComponent() {
  return <PurchaseFrequencyPage />;
}
