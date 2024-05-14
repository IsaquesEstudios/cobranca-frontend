import Link from "next/link";
import LinkMenu from "./link-menu";
import Image from 'next/image'
import Logo from './../../img/alternate/logo-menu.png'

export default function Nav() {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <LinkMenu href="/painel">Inicio</LinkMenu>
      <LinkMenu href="/painel/clientes">Clientes</LinkMenu>
      <LinkMenu href="/painel/assinaturas">Assinaturas</LinkMenu>

    </nav>
  );
}
