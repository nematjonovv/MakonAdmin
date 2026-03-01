"use client";
import { redirect } from "next/navigation";

function Dashboard() {
  redirect("/dashboard/overview");
}

export default Dashboard;
