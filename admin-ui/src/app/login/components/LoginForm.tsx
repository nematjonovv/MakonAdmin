"use client";
import { login } from "@/api/auth/auth.api";
import Loader from "@/components/Loader";
import { useToast } from "@/Providers/MessageProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { error, success } = useToast();
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await login(username, password);
      
      if (res.ok) {
        success("Muvaffaqiyatli!");
        router.replace("/dashboard");
        setLoading(false);
      } else {
        const data = await res.json();
        error(data.message);
      }
    } catch (err: any) {
      error(err.message?.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-(--bg) flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Kirish
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Davom etish uchun tizimga kiring
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Admin nomi
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              placeholder="username"
              className="w-full bg-gray-900 border border-gray-800 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none focus:border-(--surface) focus:ring-1 focus:ring-(--surface) transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Parol
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="••••••••"
              className="w-full bg-gray-900 border border-gray-800 text-white placeholder-gray-600 rounded-lg px-4 py-3 text-sm outline-none focus:border-(--surface) focus:ring-1 focus:ring-(--surface) transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-(--surface) hover:bg-(--card) active:scale-98 transition text-white font-semibold py-3 rounded-lg text-sm transition-colors cursor-pointer mt-2"
          >
            {loading ? <Loader /> : "Kirish"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
