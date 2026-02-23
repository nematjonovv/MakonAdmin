"use client";
import { me } from "@/api/auth/auth.api";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
export type AdminDto = {
  id: number;
  name: string;
  role: string;
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [admin, setAdmin] = useState<AdminDto | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    me()
      .then((res) => res.json())
      .then((res) => setAdmin(res.admin))
      .catch(() => {
        router.replace("/login");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (!admin) return null;
  return (
    <div className="h-screen w-screen text-white flex font-clash">
        <Sidebar admin={admin}/>
      <div className="w-full px-10 h-screen overflow-y-auto custom-scroll">
        {children}
      </div>
    </div>
  );
}
