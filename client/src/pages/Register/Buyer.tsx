import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Buyer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col justify-center items-center w-3/4 max-w-xl h-60 p-4 gap-4 border-2 border-gray-300 rounded-lg"
    >
      <h2 className="text-center">Реєстрація покупця</h2>

      <input
        type="email"
        placeholder="Електронна пошта"
        value={email}
        autoComplete="email"
        className="border-b border-gray-300"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setEmail(event.target.value)
        }
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        autoComplete="current-password"
        className="border-b border-gray-300"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setPassword(event.target.value)
        }
      />
      <button
        type="submit"
        className="border border-gray-300 rounded-lg px-3 py-1 hover:bg-slate-300"
      >
        Зареєструватись
      </button>
      <span className="text-center">
        Є аккаунт?{" "}
        <span
          className="text-gray-500 cursor-pointer hover:border-b hover:border-gray-500 "
          onClick={() => navigate("/login")}
        >
          Увійти
        </span>
      </span>
    </form>
  );
}
