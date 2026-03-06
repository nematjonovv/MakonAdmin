"use client";

import { getContact, updateContact } from "@/api/contact.api";
import { useToast } from "@/Providers/MessageProvider";
import { ContactData } from "@/types/contact.type";
import { useEffect, useState, ChangeEvent, FormEvent, RefObject } from "react";

interface ContactFieldsProps {
  formRef: RefObject<HTMLFormElement | null>;
  cancelRef: RefObject<(() => void) | null>;
}

function ContactFields({ formRef, cancelRef }: ContactFieldsProps) {
  const defaultContact: ContactData = {
    id: 0,
    phone: "",
    phone2: "",
    email: "",
    addressUz: "",
    addressRu: "",
    instagram: "",
    telegram: "",
    youtube: "",
    facebook: "",
    mapUrl: "",
    createdAt: "",
    updatedAt: "",
  };
  const [contact, setContact] = useState<ContactData>(defaultContact);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const { error, success } = useToast();
  useEffect(() => {
    getContact()
      .then((res) => setContact(res.data ?? defaultContact))
      .catch((err) => console.log(err))
      .finally(() => setFetching(false));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("contact state:", contact); // ← undefined chiqsa muammo shu
    setContact((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const handleCancel = () => {
    getContact()
      .then((res) => setContact(res.data))
      .catch((err) => console.log(err));
    console.log("Asd");
  };

  useEffect(() => {
    cancelRef.current = handleCancel;
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contact) return;

    const { id, createdAt, updatedAt, ...body } = contact;

    try {
      setLoading(true)
      const res = await updateContact(body);
      if (res.success) {
        success(res?.message ?? "Muvaffaqiyatli saqlandi");
      } else {
        error(res?.message ?? "Saqlashda xatolik");
      }
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false)
    }
  };

  const inputClass =
    "bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-neutral-500 transition-colors w-full placeholder:text-neutral-500 disabled:opacity-40 w-[calc(50%-20px)] ";

  return (
    <div className="h-full flex items-center justify-center px-4 py-10">
      <form onSubmit={handleSubmit} ref={formRef} className="w-full h-full">
        <div className="flex flex-wrap gap-5">
          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Telefon 1</label>
            <input
              type="number"
              name="phone"
              value={contact?.phone ?? ""}
              onChange={handleChange}
              placeholder="+998901234567"
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Telefon 2</label>
            <input
              type="number"
              name="phone2"
              value={contact?.phone2 ?? ""}
              onChange={handleChange}
              placeholder="+998991112233"
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="text"
              name="email"
              value={contact?.email ?? ""}
              onChange={handleChange}
              placeholder="info@example.com"
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Manzil (UZ)</label>
            <input
              type="text"
              name="addressUz"
              value={contact?.addressUz ?? ""}
              onChange={handleChange}
              placeholder="Toshkent, ..."
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Адрес (RU)</label>
            <input
              type="text"
              name="addressRu"
              value={contact?.addressRu ?? ""}
              onChange={handleChange}
              placeholder="Ташкент, ..."
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Instagram</label>
            <input
              type="text"
              name="instagram"
              value={contact?.instagram ?? ""}
              onChange={handleChange}
              placeholder="https://instagram.com/..."
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Telegram</label>
            <input
              type="text"
              name="telegram"
              value={contact?.telegram ?? ""}
              onChange={handleChange}
              placeholder="https://t.me/..."
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">YouTube</label>
            <input
              type="text"
              name="youtube"
              value={contact?.youtube ?? ""}
              onChange={handleChange}
              placeholder="https://youtube.com/..."
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Facebook</label>
            <input
              type="text"
              name="facebook"
              value={contact?.facebook ?? ""}
              onChange={handleChange}
              placeholder="https://facebook.com/..."
              disabled={fetching}
              className={inputClass}
            />
          </div>

          <div
            className="flex flex-col gap-1.5"
            style={{ width: "calc(50% - 10px)" }}
          >
            <label className="text-gray-400 text-sm">Map URL</label>
            <input
              type="text"
              name="mapUrl"
              value={contact?.mapUrl ?? ""}
              onChange={handleChange}
              placeholder="https://maps.google.com/..."
              disabled={fetching}
              className={inputClass}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactFields;
