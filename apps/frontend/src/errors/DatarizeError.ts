import { ERROR_CODE } from "@/constants";

type ErrorCode = (typeof ERROR_CODE)[keyof typeof ERROR_CODE];

export class DatarizeError extends Error {
  constructor(
    message: string,
    public code: ErrorCode,
    public reason?: string,
  ) {
    super(message);
    this.name = "DatarizeError";

    Object.setPrototypeOf(this, DatarizeError.prototype);
  }

  static isDatarizeError(error: unknown): error is DatarizeError {
    return error instanceof DatarizeError;
  }
}
