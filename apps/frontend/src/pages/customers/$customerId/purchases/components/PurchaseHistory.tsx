import { ReactNode, useParams } from "@tanstack/react-router";
import { usePurchaseHistory } from "../hooks/usePurchaseHistory";
import { assert } from "@/utils/assert";

export function PurchaseHistory() {
  const { customerId } = useParams({
    from: "/customers/$customerId/purchases/",
  });

  assert(!isNaN(Number(customerId)), "customerId must be a number");

  const { data: purchaseHistory } = usePurchaseHistory(Number(customerId));

  return (
    <ul>
      {purchaseHistory.map(
        ({ product, date, quantity, price, imgSrc }, index) => {
          return (
            <ListItemWrapper key={`${product}-${index}`}>
              <img
                src={imgSrc}
                alt={product}
                className="h-16 w-16 rounded object-cover"
                loading="lazy"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{product}</h2>
                <div className="text-sm text-gray-700">
                  <span>{date}</span>
                  <div className="flex flex-row gap-2">
                    <span>{`${quantity}개`}</span>
                    <span>|</span>
                    <span>{`${price.toLocaleString()}원`}</span>
                  </div>
                </div>
              </div>
            </ListItemWrapper>
          );
        },
      )}
    </ul>
  );
}

function ListItemWrapper({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-center gap-4 border-b border-gray-200 p-4">
      {children}
    </li>
  );
}

PurchaseHistory.Skeleton = () => {
  return (
    <ul>
      {Array.from({ length: 4 }).map((_, index) => (
        <ListItemWrapper key={index}>
          <div className="h-16 w-16 rounded bg-gray-300" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-4 w-16 rounded bg-gray-300" />
            <div className="h-3 w-20 rounded bg-gray-300" />
            <div className="h-3 w-24 rounded bg-gray-300" />
          </div>
        </ListItemWrapper>
      ))}
    </ul>
  );
};
