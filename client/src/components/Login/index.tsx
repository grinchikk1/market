import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store/hook";
import { getAuth } from "../../redux/slice/LoginSlice";

export default function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.login);

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(getAuth({ email, password }));

    setEmail("");
    setPassword("");
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col justify-center items-center w-3/4 max-w-96 h-60 p-7 gap-4 border-2 border-gray-300 rounded-lg"
    >
      <h2 className="text-center">Вхід</h2>

      <input
        type="email"
        placeholder="Електронна пошта"
        value={email}
        required
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
        required
        autoComplete="current-password"
        className="w-full border-b border-gray-300"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setPassword(event.target.value)
        }
      />
      <button
        type="submit"
        className="w-full border border-gray-300 rounded-lg px-3 py-1 hover:bg-slate-300"
      >
        Увійти
      </button>
      <span className="text-center">
        Немає аккаунту?{" "}
        <span
          className="text-gray-500 cursor-pointer hover:border-b hover:border-gray-500"
          onClick={() => navigate("/register")}
        >
          Зареєструватись
        </span>
      </span>
    </form>
  );
}
