import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { createCustomer } from "../../redux/slice/RegisterSlice";
// import { useAppDispatch } from "../../redux/store/hook";

export default function Buyer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setLogin] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    // dispatch(createCustomer({ email, password, confirm_password, username }));
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
      <h2 className="text-center">Реєстрація покупця</h2>
      <span className=" text-xs">Зареєструватися швидко через</span>
      <div className="flex justify-center w-full p-4 gap-2">
        <button
          type="button"
          className="text-white min-w-28 bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule={"evenodd"}
            />
          </svg>
          Facebook
        </button>
        <button
          type="button"
          className="text-white min-w-28 bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
        >
          <svg
            className="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fillRule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clipRule="evenodd"
            />
          </svg>
          Google
        </button>
      </div>
      <span className=" text-xs">або</span>
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
        required
        autoComplete="email"
        className="border-b border-gray-300 w-full"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setEmail(event.target.value)
        }
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        required
        autoComplete="new-password"
        className="border-b border-gray-300 w-full"
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
      <div className="text-xs">
        Натискаючи «Зареєструватися», ви приймаєте{" "}
        <span className="text-green-500 cursor-pointer">
          Правила користуванням сайтом
        </span>
      </div>
      <button
        type="submit"
        className="border w-full border-gray-300 rounded-lg px-3 py-1 hover:bg-slate-300"
      >
        Зареєструватися
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
