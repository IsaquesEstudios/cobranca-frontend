import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableSignature from "@/components/table-signature/table";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import Link from "next/link";
import { api } from "@/lib/utils";

export default async function Dashboard() {
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

  const person = await api
    .get("/signature/all")
    .then((data) => data.data.findSignature);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40 bg-off-white">
      <div className="flex flex-col mt-4 sm:gap-4 sm:py-4 ">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center mb-4">
              <TabsList>
                <TabsTrigger value="all">Todos</TabsTrigger>
                {/* <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger> */}
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <Link href="/painel/assinaturas/nova">
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Adicionar assinatura
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Assinaturas</CardTitle>
                  <CardDescription>
                    Confira a lista de assinaturas mensais de sua empresa.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TableSignature data={person} />
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
