
import Header from "@/components/header/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel - Cobrança automática",
  description: "Cobrança automática de clientes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Header />
      {children}
    </body>
  );
}
