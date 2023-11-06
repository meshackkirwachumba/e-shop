"use client";

import { AiOutlineGoogle } from "react-icons/ai";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface LoginFormProps {
  currentUser: SafeUser | undefined | null;
}
const LoginForm = ({ currentUser }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, [currentUser, router]);

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
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Logged in");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  // if there is currentUser  redirect
  if (currentUser) {
    return <p className="text-center">Logged in.Redirecting...</p>;
  }
  return (
    <>
      <Heading title="Sign In to E-Shop" />
      <Button
        label="Continue with Google"
        icon={AiOutlineGoogle}
        outline
        onClick={() => {
          signIn("google");
        }}
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
        Don't have an account?
        <Link className="underline" href="/register">
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
