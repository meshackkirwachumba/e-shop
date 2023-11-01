"use client";

import { AiOutlineGoogle } from "react-icons/ai";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //submit data
  const onSubmitData: SubmitHandler<FieldValues> = (data) => {
    try {
      setIsLoading(true);
      console.log(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Heading title="Sign In to E-Shop" />
      <Button
        label="Continue with Google"
        icon={AiOutlineGoogle}
        outline
        onClick={() => {}}
      />
      <hr className="w-full h-px bg-slate-400" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        type="email"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        type="password"
        register={register}
        errors={errors}
        required
      />

      <Button
        label={isLoading ? "Loading..." : "Login"}
        onClick={handleSubmit(onSubmitData)}
      />

      <p className="text-sm">
        Don't have an account?{" "}
        <Link className="underline" href="/register">
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
