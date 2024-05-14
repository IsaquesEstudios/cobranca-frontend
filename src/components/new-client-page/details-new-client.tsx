"use client";

import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { api } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { Badge } from "../ui/badge";

export default function NewClientPage() {
  const [name, setName] = useState<String>();
  const [email, setEmail] = useState<String>();

  async function HandleCreateNewClient(e: FormEvent) {
    e.preventDefault();

    await api.post("/debtor/create", {
      name: name,
      email: email,
    });

    window.location.href = "/painel/clientes"
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <Link href="/painel/assinaturas">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Clientes
        </h1>
        <Badge variant="outline" className="ml-auto sm:ml-0">
          Novo
        </Badge>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Link href="/painel/assinaturas">
            <Button variant="outline" size="sm">
              Cancelar
            </Button>
          </Link>
          <Button size="sm" onClick={HandleCreateNewClient}>
            Salvar assinatura
          </Button>
        </div>
      </div>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <form className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Criar um usuário para cobranças</CardTitle>
                <CardDescription>
                  Para que você possa aproveitar todos os benefícios da nossa
                  plataforma, pedimos que preencha os campos abaixo com suas
                  informações verdadeiras.
                  <br />
                  <br /> 
                  Com esses dados, você poderá vincular sua conta a uma
                  assinatura ou pagamento único, garantindo acesso a [detalhes
                  específicos da assinatura ou plano de pagamento].
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="title">Nome</Label>
                    <Input
                      id="title"
                      type="text"
                      className="w-full"
                      placeholder="Nome"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="title">Email</Label>
                    <Input
                      id="title"
                      type="text"
                      className="w-full"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </CardContent>
    </>
  );
}
