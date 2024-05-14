"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";

export default function UserProfile() {
  function HandleSignIn() {
    document.cookie = " token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = " refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Opção do menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuItem>Suporte</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer hover:bg-off-white"
          onClick={HandleSignIn}
        >
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
