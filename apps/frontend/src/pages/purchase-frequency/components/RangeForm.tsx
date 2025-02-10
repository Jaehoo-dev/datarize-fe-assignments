import { Button } from "@/components/Button";
import { isEmptyStringOrNil } from "@/utils/isEmptyStringOrNil";
import { useNavigate } from "@tanstack/react-router";
import { InputHTMLAttributes, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function RangeForm() {
  const navigate = useNavigate({ from: "/purchase-frequency" });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{
    from: string | null;
    to: string | null;
  }>({
    defaultValues: {
      from: null,
      to: null,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(({ from, to }) => {
        if (from == null && to == null) {
          navigate({
            search: {},
            replace: true,
          });
        } else if (from != null && to != null) {
          navigate({
            search: { from, to },
            replace: true,
          });
        } else if (from != null) {
          setError("from", { type: "required" });
        } else if (to != null) {
          setError("to", { type: "required" });
        }
      })}
      className="flex gap-4"
    >
      <div className="flex items-center gap-2">
        <DateInput
          {...register("from", {
            setValueAs: (value) => {
              return value === "" ? null : value;
            },
            validate: (value) => {
              if (value == null) {
                return true;
              }

              return z.string().date().safeParse(value).success;
            },
          })}
          error={errors.from != null}
        />
        <span>~</span>
        <DateInput
          {...register("to", {
            setValueAs: (value) => {
              return value === "" ? null : value;
            },
            validate: (value) => {
              if (value == null) {
                return true;
              }

              return z.string().date().safeParse(value).success;
            },
          })}
          error={errors.to != null}
        />
      </div>
      <Button type="submit">검색</Button>
    </form>
  );
}

const DateInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
    errorMessage?: string;
  }
>(function DateInputWithRef({ className, error, errorMessage, ...props }, ref) {
  return (
    <div className={twMerge("flex flex-col gap-1", className)}>
      <input
        ref={ref}
        type="date"
        className={twMerge(
          "rounded border border-gray-300 px-3 py-2 text-sm",
          error && "border-red-500",
        )}
        {...props}
      />
      {error && !isEmptyStringOrNil(errorMessage) ? (
        <span className="text-sm text-red-500">{errorMessage}</span>
      ) : null}
    </div>
  );
});
