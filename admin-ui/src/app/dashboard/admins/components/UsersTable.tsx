"use client";

import { deleteUser, getUsers } from "@/api/admin.api";
import { useToast } from "@/Providers/MessageProvider";
import { IUser } from "@/types/users.tyoe";
import { Popconfirm } from "antd";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

function UsersTable() {
  const [users, setUsers] = useState<IUser[]>();
  const { error, success } = useToast();
  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteUser(id);
      if (res.success) {
        success(res.message);
        setUsers((prev) => prev?.filter((f) => f.id !== id));
      } else {
        error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-6">
      <div className="rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-(--card) border-b border-gray-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Admin nomi
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 w-1/6 py-4 text-left text-xs font-semibold text-white uppercase ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-(--card)">
            {users?.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-(--bg) transition-colors duration-150"
              >
                <td className="px-6 py-4 text-sm text-white font-mono">
                  #{user.id}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-linear-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-sm font-semibold shadow-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-white">
                      {user.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === "admin"
                        ? "bg-red-50 text-red-600 ring-1 ring-red-200"
                        : "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        user.role === "admin" ? "bg-red-500" : "bg-emerald-500"
                      }`}
                    />
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 ">
                  <Popconfirm
                    title="Murojatni o'chirish"
                    description={`Haqiqatdan ${user.name} o'chirishni istaysizmi?`}
                    okText="Ha"
                    cancelText="Yo'q"
                    className=""
                    onConfirm={() => handleDelete(user.id)}
                  >
                    <button className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-500 hover:text-red-500 hover:bg-neutral-800 transition-colors cursor-pointer">
                      <Trash2 size={16} />
                    </button>
                  </Popconfirm>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!users?.length && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-sm">Foydalanuvchilar topilmadi</p>
          </div>
        )}
      </div>
      <div className="mt-6 w-full flex justify-end pr-5">
        <p className="text-sm text-gray-500 mt-1">
          Jami:{" "}
          <span className="text-blue-400 font-bold">{users?.length ?? 0}</span>{" "}
          ta admin
        </p>
      </div>
    </div>
  );
}

export default UsersTable;
