import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { createCustomer } from "../../redux/slice/RegisterSlice";

export default function Buyer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const customer = useSelector((state) => state);

  // console.log(customer);

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email, password);
    // dispatch(createCustomer({ email, password }));
    setEmail("");
    setPassword("");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col justify-center items-center w-3/4 max-w-96 p-7 gap-4 border-2 border-gray-300 rounded-lg overflow-hidden"
    >
      <h2 className="text-center">Реєстрація покупця</h2>
      <span className=" text-xs">Зареєструватися швидко через</span>
      <div className="flex justify-between w-full p-4">
        <button
          type="button"
          className="w-full mr-2 bg-blue-300 px-6 py-2 rounded-lg"
        >
          facebook
        </button>
        <button
          type="button"
          className="w-full bg-red-300 px-6 py-2 rounded-lg"
        >
          google
        </button>
      </div>
      <span className=" text-xs">або</span>
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
        autoComplete="current-password"
        className="border-b border-gray-300 w-full"
        onChange={(event: { target: { value: SetStateAction<string> } }) =>
          setPassword(event.target.value)
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
