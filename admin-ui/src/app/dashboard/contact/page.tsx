"use client";
import PageTitle from "@/components/PageTitle";
import ContactFields from "./components/ContactFields";
import { useRef } from "react";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const cancelRef = useRef<(() => void) | null>(null);
  return (
    <div>
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2 mb-5 pt-5 sticky top-0 z-50 bg-(--bg)">
        <PageTitle title="Aloqa malumotlari" />

        <div  className="space-x-5">
          <button
            onClick={() => formRef.current?.requestSubmit()}
            className="bg-(--surface) cursor-pointer py-1 px-2 rounded-md"
          >
            Saqlash
          </button>
          <button
            type="button"
            onClick={() => cancelRef.current?.()}
            className="px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-white border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer"
          >
            Bekor qilish
          </button>
        </div>
      </div>

      <ContactFields formRef={formRef} cancelRef={cancelRef} />
    </div>
  );
}

export default Contact;
