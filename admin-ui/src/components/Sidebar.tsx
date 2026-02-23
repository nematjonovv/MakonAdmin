"use client";

import { logout } from "@/api/auth/auth.api";
import { AdminDto } from "@/app/dashboard/layout";
import { Menu } from "@/data/menu.data";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar({ admin }: { admin: AdminDto }) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1 w-70 glass-card h-screen p-1 justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-2xl capitalize p-3">{admin.name}</p>
        {Menu.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.key}
              href={item.href}
              className={`py-2 px-2 rounded-md text-lg cursor-pointer ${active ? "bg-(--surface)" : "hover:bg-(--surface-hover)"}`}
            >
              
              {item.label}
            </Link>
          );
        })}
      </div>
      <button onClick={() => logout()} className="flex items-center pb-5 py-2 px-2 hover:text-red-600 cursor-pointer">
        Chiqish
        <LogOut />
      </button>
    </nav>
  );
}

export default Sidebar;
