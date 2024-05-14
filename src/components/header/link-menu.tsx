"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface MenuItemProps {
  href: any;
  children?: ReactNode;
  className?: string;
  icon?: any;
}

export default function LinkMenu({
  href,
  icon,
  className,
  children,
  ...rest
}: MenuItemProps) {
  const router = usePathname();

  return (
    <Link
      href={href}
      className={`text-foreground transition-colors hover:text-foreground ${
        router === href ? "text-[#44a1ee25]" : "text-black"
      }`}
    >
      {children}
    </Link>
  );
}
