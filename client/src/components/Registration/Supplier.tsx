import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Supplier() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setLogin] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setLogin("");
  };
  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col justify-center items-center w-3/4 max-w-96 p-7 gap-4 border-2 border-gray-300 rounded-lg overflow-hidden"
    >
      <h2 className="text-center">Реєстрація постачальника</h2>
      <input
        type="text"
        placeholder="Імʼя"
        value={username}
        required
        autoComplete="given-name"
        className="border-b border-gray-300 w-full"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setLogin(event.target.value)
        }
      />
      <input
        type="email"
        placeholder="Електронна пошта"
        value={email}
        autoComplete="email"
        className="w-full border-b border-gray-300"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setEmail(event.target.value)
        }
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        autoComplete="new-password"
        className="w-full border-b border-gray-300"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setPassword(event.target.value)
        }
      />
      <input
        type="password"
        placeholder="Повторити пароль"
        value={confirm_password}
        required
        autoComplete="new-password"
        className="border-b border-gray-300 w-full"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setConfirmPassword(event.target.value)
        }
      />
      <button
        type="submit"
        className="w-full border border-gray-300 rounded-lg px-3 py-1 hover:bg-slate-300"
      >
        Зареєструватись
      </button>
      <span className="text-center">
        Є аккаунт?{" "}
        <span
          className="text-gray-500 cursor-pointer hover:border-b hover:border-gray-500"
          onClick={() => navigate("/login")}
        >
          Увійти
        </span>
      </span>
    </form>
  );
}
