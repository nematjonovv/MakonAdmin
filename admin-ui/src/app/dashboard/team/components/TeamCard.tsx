"use client";

import { deleteTeam } from "@/api/team.api";
import { useToast } from "@/Providers/MessageProvider";
import { Popconfirm } from "antd";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  photo: string;
  id: number;
  onSuccess: () => void;
}

export default function TeamCard({
  name,
  role,
  photo,
  id,
  onSuccess,
}: TeamCardProps) {
  const [deleting, setDeleting] = useState(false);
  const { success, error } = useToast();
  const handleDelete = async () => {
    try {
      setDeleting(true);
      const res = await deleteTeam(id);
      console.log(res);

      if (res.success) {
        success(res.message);
        onSuccess();
      } else {
        error(`${res.message}`);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div
      className={`w-[calc(25%-20px)] h-92.5 bg-(--surface) rounded-2xl relative group overflow-hidden`}
    >
      <Image
        src={photo}
        alt={name}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105 rounded-2xl"
      />
      <div className="absolute w-full h-full text-center flex flex-col justify-end items-center z-10 bg-black/25 py-7 rounded-2xl">
        <p className="text-(--text) text-2xl">{name}</p>
        <p className="text-gray-200 text-sm">{role}</p>
      </div>

      <Popconfirm
        title="Jamoadoshni chopish"
        description={`Haqiqatan ${name}ni chopmoqchimisiz?`}
        okText="Ha"
        cancelText="Yo'q"
        className=""
        onConfirm={handleDelete}
      >
        <button
          disabled={deleting}
          className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-500 cursor-pointer disabled:cursor-not-allowed"
        >
          <Trash size={14} />
        </button>
      </Popconfirm>
    </div>
  );
}
