"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Preloader = dynamic(() => import("./Preloader"), { ssr: false });

export default function PreloaderWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/ai-workforce")) {
    return null;
  }

  return <Preloader />;
}
