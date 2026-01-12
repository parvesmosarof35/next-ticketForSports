"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/commom/navbar";
import { Footer } from "@/components/commom/footer";
import { ReactNode } from "react";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const noLayoutRoutes = [
    "/signin",
    "/signup",
    "/not-found",
    "/forgot-password",
    "/forgot-password/verify-otp",
    "/forgot-password/verify-otp/reset-password",
  ];
  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
