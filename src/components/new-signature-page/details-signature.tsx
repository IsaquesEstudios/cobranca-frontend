"use client";

import { Label } from "@radix-ui/react-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { Badge } from "../ui/badge";

export default function DetailsSignature() {
  const [title, setTitle] = useState<String>();
  const [description, setDescription] = useState<String>();
  const [value, setValue] = useState<String>();
  const [pay_day, setPayDay] = useState<Number>();
  const [debtor, setDebtor] = useState<String>();
  const [tags, setTags] = useState<String>();

  async function HandleCreateNewSignature(e: FormEvent) {
    e.preventDefault();
    console.log("tags")
    const newTags: string[] = [];
    const formatTag = tags?.split(",");

    async function capitalizeFirstLetter(string: string) {
      const text = string.charAt(0).toUpperCase() + string.substring(1);
      newTags.push(text);
    }


    await formatTag?.map((i, _) => {

      if (i.length > 1) {
        return capitalizeFirstLetter(i);
      }
    });

    await api.post("/signature/create", {
      title: title,
      description: description,
      value: value,
      pay_day: pay_day,
      debtor_id: debtor,
      tags: newTags,
    });

    window.location.href = "/painel/assinaturas"
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
          Assinatura
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
          <Button size="sm" onClick={HandleCreateNewSignature}>
            Salvar assinatura
          </Button>
        </div>
      </div>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <form className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Detalhes da assinatura</CardTitle>
                <CardDescription>
                  Crie titulo e detalhes das suas assinaturas, descreva de
                  maneira resumida no titulo quais serviços serão cobrados e na
                  descrição, forneça mais detalhes sobre cada serviço e
                  cobranças detalhadamente.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="title">Titulo</Label>
                    <Input
                      id="title"
                      type="text"
                      className="w-full"
                      placeholder="Descrição da assinatura (Visível na cobrança)"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Descrição</Label>
                    <Textarea
                      id="description"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                      className="min-h-32"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader>
                <CardTitle>Informações do pagamento</CardTitle>
                <CardDescription>
                  Essas informações adicionais são extremamente importante,
                  descreva com clareza e precisão.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-x-4">
                  <Input
                    id="stock-1"
                    type="number"
                    placeholder="1.000.000"
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-x-4">
                  <Input
                    id="stock-1"
                    type="number"
                    placeholder="Min 1 max 28"
                    onChange={(e) => {
                      setPayDay(Number(e.target.value));
                    }}
                  />
                  <Input
                    id="stock-1"
                    type="text"
                    placeholder="Nome do devedor"
                    onChange={(e) => {
                      setDebtor(e.target.value);
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card x-chunk="dashboard-07-chunk-2">
              <CardHeader>
                <CardTitle>Outras informações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="grid gap-3">
                    <Label htmlFor="category">Tags</Label>
                    <Input
                      type="text"
                      placeholder="Social Media, Manutenção de site, ..."
                      onChange={(e) => {
                        setTags(e.target.value);
                      }}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="subcategory">
                      Id do vendedor (optional)
                    </Label>
                    <Input
                      type="text"
                      placeholder="Id de pagamento do devedor"
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
