import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Link to="/purchase-frequency" className="cursor-pointer underline">
          구매 빈도
        </Link>
        <Link to="/customers" className="cursor-pointer underline">
          고객 목록
        </Link>
      </div>
    </div>
  );
}
