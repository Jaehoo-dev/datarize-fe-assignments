import { z } from "zod";

type DateStrings = {
  from: string; // YYYY-MM-DD
  to: string;
};

type Range = `${string},${string}`;

export const dateRangeUtils = {
  datesToRange: ({ from, to }: DateStrings) => {
    return `${from},${to}`;
  },
  rangeToDateStrings: (range: Range) => {
    const [from, to] = range.split(",");

    return { from, to };
  },
  rangeToDateObjects: (range: Range) => {
    const { from, to } = dateRangeUtils.rangeToDateStrings(range);

    return { from: new Date(from), to: new Date(to) };
  },
  isValidRange: (range: string): range is Range => {
    const [from, to] = range.split(",");

    return dateRangeUtils.isValidDate(from) && dateRangeUtils.isValidDate(to);
  },
  isValidDate: (date: string) => {
    return z.string().date().safeParse(date).success;
  },
};
