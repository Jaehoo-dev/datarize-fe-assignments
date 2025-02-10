import { Button } from "@/components/Button";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

export function SearchForm() {
  const navigate = useNavigate({ from: "/customers" });
  const { name: nameSearchParam } = useSearch({ from: "/customers/" });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: nameSearchParam ?? "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(({ name }) => {
        navigate({
          search: { name },
          replace: true,
        });
      })}
    >
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="예) 홍길동"
          className="rounded border px-2 py-1"
          {...register("name", {
            setValueAs: (value: string) => {
              return value === "" ? undefined : value.trim();
            },
          })}
        />
        <Button type="submit">검색</Button>
      </div>
    </form>
  );
}
