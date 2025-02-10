import { 구매금액_정렬 } from "@/domains/customer/types";
import { useNavigate, useSearch } from "@tanstack/react-router";

const options = [
  { label: "기본", value: undefined },
  { label: "금액 오름차순", value: 구매금액_정렬.오름차순 },
  { label: "금액 내림차순", value: 구매금액_정렬.내림차순 },
] as const;

export function SortSelect() {
  const { sortBy } = useSearch({ from: "/customers/" });
  const navigate = useNavigate({ from: "/customers" });

  return (
    <select
      className="rounded border px-2 py-1"
      value={sortBy}
      onChange={(e) => {
        navigate({
          search: {
            sortBy: e.target.value as (typeof options)[number]["value"],
          },
        });
      }}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
