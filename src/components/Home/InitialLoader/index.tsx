"use client";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Prevent body scroll
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (isOpen) return <LoadingScreen />;
  return <>{children}</>;
}
