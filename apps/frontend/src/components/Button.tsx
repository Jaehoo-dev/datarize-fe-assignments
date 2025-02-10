import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge(
        "bg-primary-500 cursor-pointer rounded border px-4 py-1",
        className,
      )}
      {...props}
    />
  );
}
