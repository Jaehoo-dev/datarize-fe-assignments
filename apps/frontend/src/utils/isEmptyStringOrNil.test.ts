import { describe, it, expect } from "vitest";
import { isEmptyStringOrNil } from "./isEmptyStringOrNil";

describe("isEmptyStringOrNil", () => {
  it("null이 주어지면 true를 반환한다.", () => {
    expect(isEmptyStringOrNil(null)).toBe(true);
  });

  it("undefined가 주어지면 true를 반환한다.", () => {
    expect(isEmptyStringOrNil(undefined)).toBe(true);
  });

  it("빈 문자열이 주어지면 true를 반환한다.", () => {
    expect(isEmptyStringOrNil("")).toBe(true);
  });

  it("길이가 0보다 긴 문자열이 주어지면 false를 반환한다.", () => {
    expect(isEmptyStringOrNil("test")).toBe(false);
  });

  it("숫자가 주어지면 false를 반환한다.", () => {
    expect(isEmptyStringOrNil(0)).toBe(false);
    expect(isEmptyStringOrNil(1)).toBe(false);
  });

  it("불리언이 주어지면 false를 반환한다.", () => {
    expect(isEmptyStringOrNil(false)).toBe(false);
    expect(isEmptyStringOrNil(true)).toBe(false);
  });

  it("객체/배열이 주어지면 false를 반환한다.", () => {
    expect(isEmptyStringOrNil([])).toBe(false);
    expect(isEmptyStringOrNil({})).toBe(false);
  });
});
