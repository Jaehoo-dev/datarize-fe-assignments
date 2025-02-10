import { useParams } from "@tanstack/react-router";
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
            <li
              key={`${product}-${index}`}
              className="flex items-center gap-4 border-b border-gray-200 p-4"
            >
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
            </li>
          );
        },
      )}
    </ul>
  );
}

PurchaseHistory.Skeleton = () => {
  return <div>Loading...</div>;
};
