import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";

export const Table = {
  Root: (props: { children: ReactNode }) => {
    return <table className="w-full border-collapse border" {...props} />;
  },
  Header: (props: { children: ReactNode }) => {
    return (
      <thead>
        <tr className="bg-primary-500">{props.children}</tr>
      </thead>
    );
  },
  HeaderCell: (props: { children: ReactNode }) => {
    return <th className="border px-4 py-2" {...props} />;
  },
  Body: (props: { children: ReactNode }) => {
    return <tbody {...props} />;
  },
  Row: (props: {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
  }) => {
    return <tr {...props} />;
  },
  Cell: ({
    className,
    align = "center",
    ...props
  }: {
    children?: ReactNode;
    className?: string;
    align?: "left" | "center" | "right";
    colSpan?: number;
  }) => {
    const alignClass = match(align)
      .with("left", () => "text-left")
      .with("right", () => "text-right")
      .with("center", () => "text-center")
      .exhaustive();

    return (
      <td
        className={twMerge("border px-4 py-2", alignClass, className)}
        {...props}
      />
    );
  },
};
