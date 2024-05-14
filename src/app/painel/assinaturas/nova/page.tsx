import { TooltipProvider } from "@/components/ui/tooltip";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import DetailsSignature from "@/components/new-signature-page/details-signature";

export default function Dashboard() {
  const token: any = cookies().get("token");
  if (token) {
    const infoToken: any = jwt.verify(token?.value, `${process.env.TOKEN}`);

    if (infoToken.email === process.env.ADMIN_ACESS_ONE) {
    } else {
      redirect("/");
    }
  } else {
    redirect("/");
  }

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 pt-4">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid flex-1 auto-rows-max gap-4">
              <DetailsSignature />
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
