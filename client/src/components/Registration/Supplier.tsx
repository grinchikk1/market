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
    <form className=" w-3/4 max-w-96 mx-auto" onSubmit={handleRegister}>
      <h2 className="text-center">Реєстрація постачальника</h2>
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900"
        />
        <input
          type="text"
          id="username"
          value={username}
          name="username"
          autoComplete="given-name"
          className="border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5"
          placeholder="Імʼя"
          required
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setLogin(event.target.value)
          }
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        />
        <input
          type="email"
          id="email"
          value={email}
          name="email"
          autoComplete="email"
          className="border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5"
          placeholder="Електронна пошта"
          required
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setEmail(event.target.value)
          }
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          value={password}
          autoComplete="new-password"
          className="border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5 "
          required
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setPassword(event.target.value)
          }
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900"
        />
        <input
          type="password"
          id="repeat-password"
          name="repeat-password"
          placeholder="Повторити пароль"
          value={confirm_password}
          autoComplete="new-password"
          className="border-b border-gray-300 text-gray-900 text-sm block w-full p-2.5"
          required
          onChange={(event: { target: { value: SetStateAction<string> } }) =>
            setConfirmPassword(event.target.value)
          }
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded"
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900"
        >
          I agree with the{" "}
          <a href="#" className="text-green-600 hover:underline">
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
      >
        Зареєструватись
      </button>
      <div className="text-center py-6 ">
        Є аккаунт?{" "}
        <span
          className="text-green-500 cursor-pointer hover:border-b hover:border-gray-500"
          onClick={() => navigate("/login")}
        >
          Увійти
        </span>
      </div>
    </form>
  );
}
