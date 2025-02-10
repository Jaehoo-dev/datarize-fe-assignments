import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";
import { describe, it, expect } from "vitest";

function ThrowErrorComponent({ error }: { error: boolean }) {
  if (error) {
    throw new Error("Test Error Component");
  }

  return <div>Not Thrown</div>;
}

describe("ErrorBoundary", () => {
  it("에러가 없으면 children을 렌더링한다.", () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">child</div>
      </ErrorBoundary>,
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("에러가 발생했을 때 fallback이 주어지지 않으면 기본 fallback UI를 렌더링한다.", () => {
    render(
      <ErrorBoundary>
        <ThrowErrorComponent error={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByText("에러가 발생했습니다.")).toBeInTheDocument();
    expect(screen.getByText("재시도")).toBeInTheDocument();
  });

  it("주어진 fallback UI를 렌더링한다.", () => {
    function TestFallback() {
      return <span>Custom Fallback</span>;
    }

    render(
      <ErrorBoundary fallback={() => <TestFallback />}>
        <ThrowErrorComponent error={true} />
      </ErrorBoundary>,
    );

    expect(screen.getByText("Custom Fallback")).toBeInTheDocument();
  });
});
