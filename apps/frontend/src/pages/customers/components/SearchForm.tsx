import { useForm } from "react-hook-form";

interface Props {
  defaultName: string;
  onSubmit: (name: string) => void;
}

export function SearchForm({ defaultName, onSubmit }: Props) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: defaultName,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(({ name }) => {
        onSubmit(name);
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
        <button
          type="submit"
          className="bg-primary-500 cursor-pointer rounded px-4 py-1"
        >
          검색
        </button>
      </div>
    </form>
  );
}
