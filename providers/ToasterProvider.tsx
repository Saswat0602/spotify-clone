import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

type ToasterProviderProps = {
  children: ReactNode;
};

const ToasterProvider = ({ children }: ToasterProviderProps) => {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
          },
        }}
      />
      {children}
    </>
  );
};

export default ToasterProvider;
