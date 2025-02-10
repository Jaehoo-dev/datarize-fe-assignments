import { ReactNode } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Button } from "./Button";
interface Props {
  children: ReactNode;
}

export default function GlobalErrorBoundary({ children }: Props) {
  return (
    <ErrorBoundary fallback={() => <ErrorFallback />}>{children}</ErrorBoundary>
  );
}

function ErrorFallback() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-red-500">에러가 발생했습니다.</h1>
      <Button
        onClick={() => {
          window.location.reload();
        }}
      >
        새로고침
      </Button>
    </div>
  );
}
