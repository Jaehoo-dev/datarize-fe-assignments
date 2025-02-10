export const 구매금액_정렬 = {
  오름차순: "asc",
  내림차순: "desc",
} as const;

export type 구매금액_정렬 = (typeof 구매금액_정렬)[keyof typeof 구매금액_정렬];
