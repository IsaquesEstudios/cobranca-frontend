import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export function useTokenInfo() {
  const token: any = cookies().get("token");
  if (token) {
    const User: any = jwt.verify(token?.value, `${process.env.TOKEN}`);

    if (User.email === process.env.ADMIN_ACESS_ONE) {
      return User;
    } else {
      redirect("/");
    }
  } else {
    redirect("/");
  }
}
