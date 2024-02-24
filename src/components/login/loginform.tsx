// Login Form Component
"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "./passwordinput";
import { toast } from "@/components/ui/use-toast";
import { Form } from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { Metadata } from "next";
import { sign } from "crypto";

export default function LoginForm() {
  const loginSchema = z.object({
    email: z.string().nonempty(),
    password: z.string().nonempty(),
  });

  type FormData = z.infer<typeof loginSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: FormData) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Input type="text" placeholder="E-mail" {...form.register("email")} />
        <PasswordInput
          id="password"
          {...form.register("password")}
          autoComplete="current-password"
          placeholder="Password"
        />
        <Button
          onClick={async () => {
            await signIn("credentials", {
              email: form.getValues("email"),
              password: form.getValues("password"),
              callbackUrl: "/dashboard",
            });
          }}
          className="w-full"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
}
