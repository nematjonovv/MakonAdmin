import { logout } from "@/api/auth/auth.api";
import LoginForm from "./components/LoginForm";

async function Login() {
  return (
    <div className="relative text-(--text) w-screen h-screen overflow-hidden">
      <div className="absolute right-0 -bottom-10  bg-(image:--login-bg) bg-no-repeat bg-cover bg-bottom-right w-150 h-120 " />
      <div className="absolute left-0 -top-15  bg-(image:--login-bg2) bg-no-repeat bg-cover bg-top-left w-150 h-120 " />
      <LoginForm />
    </div>
  );
}

export default Login;
