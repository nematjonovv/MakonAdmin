"use client";
import { me } from "@/api/auth/auth.api";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
type AdminDto = {
  id: number;
  name: string;
  role: string;
};
function Dashboard() {
  const [admin, setAdmin] = useState<AdminDto | null>(null);
  useEffect(() => {
    me()
      .then((res) => res.json())
      .then((res) => setAdmin(res.admin))
      .catch((err) => console.log(err.response));
  }, []);
  redirect("/dashboard/overview");
}

export default Dashboard;
