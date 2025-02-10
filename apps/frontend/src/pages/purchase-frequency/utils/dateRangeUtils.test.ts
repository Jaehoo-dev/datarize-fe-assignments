import { describe, it, expect } from "vitest";
import { dateRangeUtils } from "./dateRangeUtils";

describe("dateRangeUtils", () => {
  const validDateStrings = {
    from: "2025-02-01",
    to: "2025-02-11",
  };
  const validRange = "2025-02-01,2025-02-11";

  describe("datesToRange", () => {
    it("{ from, to }를 'from,to' 형식으로 바꾼다.", () => {
      const result = dateRangeUtils.datesToRange(validDateStrings);
      expect(result).toBe(validRange);
    });
  });

  describe("rangeToDateStrings", () => {
    it("'from,to' 형식을 { from, to }로 바꾼다.", () => {
      const result = dateRangeUtils.rangeToDateStrings(validRange);
      expect(result).toEqual(validDateStrings);
    });
  });

  describe("rangeToDateObjects", () => {
    it("'from,to' 형식을 { from: Date 객체, to: Date 객체 }로 바꾼다.", () => {
      const result = dateRangeUtils.rangeToDateObjects(validRange);
      expect(result.from).toEqual(new Date("2025-02-01"));
      expect(result.to).toEqual(new Date("2025-02-11"));
    });
  });

  describe("isValidRange", () => {
    it("'from,to' 형식이 올바르면 true를 반환한다.", () => {
      expect(dateRangeUtils.isValidRange(validRange)).toBe(true);
    });

    it("'from,to' 형식이 올바르지 않으면 false를 반환한다.", () => {
      expect(dateRangeUtils.isValidRange("")).toBe(false);
      expect(
        dateRangeUtils.isValidRange(
          "2025-02-10T20:00:00.000Z,2025-02-11T20:00:00.000Z",
        ),
      ).toBe(false);
      expect(dateRangeUtils.isValidRange("2025-02-01")).toBe(false);
      expect(dateRangeUtils.isValidRange(",2025-02-01")).toBe(false);
    });
  });

  describe("isValidDate", () => {
    it("should return true for valid date strings", () => {
      expect(dateRangeUtils.isValidDate("2021-02-01")).toBe(true);
    });

    it("should return false for invalid date strings", () => {
      expect(dateRangeUtils.isValidDate("")).toBe(false);
      expect(dateRangeUtils.isValidDate("2025-20-20")).toBe(false);
      expect(dateRangeUtils.isValidDate("2025/02/01")).toBe(false);
      expect(
        dateRangeUtils.isValidDate(
          "2025-02-10T20:00:00.000Z,2025-02-11T20:00:00.000Z",
        ),
      ).toBe(false);
    });
  });
});
