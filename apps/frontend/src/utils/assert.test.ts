import { describe, it, expect } from "vitest";
import { assert } from "./assert";

describe("assert", () => {
  it("주어진 조건이 거짓일 때 에러를 던진다.", () => {
    expect(() => {
      assert(false, "Error message");
    }).toThrow("Error message");
  });

  it("조건이 참일 때는 에러를 던지지 않는다.", () => {
    expect(() => {
      assert(true, "This should not throw");
    }).not.toThrow();
  });

  it("주어진 메시지로 에러를 던진다.", () => {
    const errorMessage = "Test error message";

    expect(() => {
      assert(false, errorMessage);
    }).toThrow(errorMessage);
  });
});
