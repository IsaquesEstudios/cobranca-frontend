"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";

import { parseCookies, setCookie } from "nookies";
import { useForm } from "react-hook-form";

import { IoMdEye } from "react-icons/io";
import { z } from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import Link from "next/link";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

type AuthProps = z.infer<typeof authSchema>;

export default function AuthForm() {
  const { register, handleSubmit } = useForm<AuthProps>({
    resolver: zodResolver(authSchema),
  });

  async function handleAuthentication({ email, password }: AuthProps) {

    const { data } = await api.post("/user/authenticate", {
      email,
      password,
    });

    setCookie(undefined, "token", data.user.token, {
      maxAge: 60 * 60 * 24 * 30,
    });

    setCookie(undefined, "refreshToken", data.user.refresh_token, {
      maxAge: 60 * 60 * 24 * 30,
    });

    window.location.href = "/painel";
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Acesse o painel administrador da sua empresa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(handleAuthentication)}
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              {...register("email")}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Senha</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Esqueceu a senha?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              {...register("password")}
            />
          </div>
          <Button type="submit" className="w-full mt-2">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
