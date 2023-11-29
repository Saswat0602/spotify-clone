"use client";

import AuthModal from "@/components/AuthModal";
import { useEffect, useState } from "react";

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      {children}
    </>
  );
};

export default ModalProvider;