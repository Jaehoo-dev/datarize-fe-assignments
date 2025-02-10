import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: Props) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <main className="flex flex-col gap-4">{children}</main>
    </div>
  );
}
