"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmitSearch: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) {
      router.push("/");
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };
  return (
    <div className="hidden md:flex items-center ">
      <input
        {...register("searchTerm")}
        placeholder="Explore E-Shop"
        type="text"
        autoComplete="off"
        className="
         hidden
         md:block
         p-2
         border
       border-gray-300
         rounded-l-md
         focus:outline-none
         focus:border[0.5px]
        focus:border-slate-500
         w-80
        "
      />
      <button
        onClick={handleSubmit(onSubmitSearch)}
        className="
          bg-slate-700
            p-2
            hover:opacity-80
            text-white
            hidden
            md:block
       "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
