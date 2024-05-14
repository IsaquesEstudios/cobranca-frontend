import AuthForm from "@/components/auth-form/auth-form";
import { cookies } from "next/headers";
import { parseCookies } from "nookies";
import { useEffect } from "react";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export default async function Home() {
  const token: any = cookies().get("token");
  if (token) {
    const infoToken: any = jwt.verify(token?.value, `${process.env.TOKEN}`);

    if (infoToken.email === process.env.ADMIN_ACESS_ONE) {
      redirect("/painel");
    }
  }

  return (
    <main className="h-screen w-full flex justify-center items-center bg-off-white">
      <AuthForm />
    </main>
  );
}
