"use client"

import PageTitle from "@/components/PageTitle";
import UsersTable from "./components/UsersTable";
import { useState } from "react";
import CreateAdminModal from "./components/CreateAdminModal";

function Settings() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2 mb-5 pt-5 sticky top-0 z-50 bg-(--bg)">
        <PageTitle title="Adminlar" />
        <button
          onClick={() => setIsOpen(true)}
          className="bg-(--surface) cursor-pointer py-1 px-2 rounded-md"
        >
          Yangi admin qo'shish
        </button>
      </div>
      <UsersTable />
      <CreateAdminModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Settings;
