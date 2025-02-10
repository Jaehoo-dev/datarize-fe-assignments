import { ERROR_CODE } from "@/constants";
import { DatarizeError } from "./DatarizeError";
import { describe, expect, it } from "vitest";

describe("DatarizeError", () => {
  it("속성들이 올바르게 설정된다.", () => {
    const message = "Test error message";
    const code = ERROR_CODE.NOT_FOUND;
    const reason = "Test error reason";

    const error = new DatarizeError(message, code, reason);

    expect(error.message).toBe(message);
    expect(error.code).toBe(code);
    expect(error.reason).toBe(reason);
    expect(error.name).toBe("DatarizeError");
  });

  describe("isDatarizeError", () => {
    it("DatarizeError 인스턴스면 true를 반환한다.", () => {
      const error = new DatarizeError(
        "Test",
        ERROR_CODE.NOT_FOUND,
        "Test reason",
      );
      expect(DatarizeError.isDatarizeError(error)).toBe(true);
    });

    it("다른 에러 타입이면 false를 반환한다.", () => {
      const error = new Error("Test");
      expect(DatarizeError.isDatarizeError(error)).toBe(false);
    });
  });
});
