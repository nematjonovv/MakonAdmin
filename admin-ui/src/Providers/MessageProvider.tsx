  "use client";
  import { message } from "antd";
  import { createContext, ReactNode, useContext } from "react";

  type MSGCtx = {
    success: (text: string) => void;
    error: (text: string) => void;
  };

  const MSGContext = createContext<MSGCtx | null>(null);

  export function MessageProvider({ children }: { children: ReactNode }) {
    const [messageApi, contextHolder] = message.useMessage();

    const value: MSGCtx = {
      success: (text) => messageApi.open({ type: "success", content: text }),
      error: (text) => messageApi.open({ type: "error", content: text }),
    };

    return (
      <MSGContext.Provider value={value}>
        {contextHolder}
        {children}
      </MSGContext.Provider>
    );
  }

  export function useToast() {
    const ctx = useContext(MSGContext);
    if (!ctx) throw new Error("useToast must be used inside ToastProvider");
    return ctx;
  }
