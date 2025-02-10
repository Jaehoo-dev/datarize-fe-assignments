import { Button } from "@/components/Button";
import { isEmptyStringOrNil } from "@/utils/isEmptyStringOrNil";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { InputHTMLAttributes, forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { dateRangeUtils } from "../utils/dateRangeUtils";
import { match, P } from "ts-pattern";

export function DateRangeForm() {
  const navigate = useNavigate({ from: "/purchase-frequency" });
  const { range } = useSearch({ from: "/purchase-frequency/" });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{
    from: string | null;
    to: string | null;
  }>({
    defaultValues:
      range != null && dateRangeUtils.isValidRange(range)
        ? dateRangeUtils.rangeToDateStrings(range)
        : {
            from: null,
            to: null,
          },
  });

  useEffect(() => {
    if (range != null && !dateRangeUtils.isValidRange(range)) {
      navigate({
        search: {},
        replace: true,
      });
    }
  }, [navigate, range]);

  return (
    <form
      className="flex gap-4"
      onSubmit={handleSubmit(({ from, to }) => {
        match({ from, to })
          .with({ from: null, to: null }, () => {
            navigate({
              search: {},
              replace: true,
            });
          })
          .with({ from: P.not(null), to: P.not(null) }, ({ from, to }) => {
            navigate({
              search: { range: dateRangeUtils.datesToRange({ from, to }) },
              replace: true,
            });
          })
          .with({ from: null, to: P.not(null) }, () => {
            setError("from", { type: "required" });
          })
          .with({ from: P.not(null), to: null }, () => {
            setError("to", { type: "required" });
          })
          .exhaustive();
      })}
    >
      <div className="flex items-center gap-2">
        <DateInput
          {...register("from", {
            setValueAs: (value) => {
              return value === "" ? null : value;
            },
            validate: (value) => {
              return value == null || dateRangeUtils.isValidDate(value);
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
              return value == null || dateRangeUtils.isValidDate(value);
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
