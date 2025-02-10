import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { usePurchaseFrequency } from "../hooks/usePurchaseFrequency";
import { useSearch } from "@tanstack/react-router";
import { dateRangeUtils } from "../utils/dateRangeUtils";
import { assert } from "@/utils/assert";

export function PurchaseFrequencyChart() {
  const { range } = useSearch({ from: "/purchase-frequency/" });
  const { data } = usePurchaseFrequency(
    range != null && dateRangeUtils.isValidRange(range)
      ? dateRangeUtils.rangeToDateObjects(range)
      : undefined,
  );

  return (
    <div className="h-[480px] w-full">
      <ResponsiveContainer width="100%" height={480}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="range"
            angle={-40}
            textAnchor="end"
            height={140}
            tickFormatter={formatTick}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" className="fill-primary-500 stroke-black" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function formatTick(tick: string) {
  const [하단, 상단] = tick
    .split("-")
    .map((val: string) => val.trim())
    .map((val: string) => Number(val));

  if (하단 === 0) {
    return `${만원(상단)} 원 이하`;
  }

  return `${만원(상단 - 일만)} 원 초과 ${만원(상단)} 원 이하`;
}

function 만원(value: number) {
  assert(value % 일만 === 0, "만으로 나누어 떨어지는 값이어야 합니다.");

  return `${value / 일만}만`;
}

const 일만 = 10_000;
