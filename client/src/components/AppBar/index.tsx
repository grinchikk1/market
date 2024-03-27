import { useNavigate } from "react-router-dom";

export default function AppBar() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full">
      <nav className="h-16 bg-gray-300 flex items-center justify-end px-4 gap-3">
        <button
          className="border border-transparent rounded-lg px-3 py-1 hover:border hover:border-gray-500"
          onClick={handleHome}
        >
          Головна
        </button>
        <button
          className="border border-transparent rounded-lg px-3 py-1 hover:border hover:border-gray-500"
          onClick={handleLogin}
        >
          Вхід
        </button>
        <span className="h-2/6 w-0.5 bg-gray-500" />
        <button
          className="border border-transparent rounded-lg px-3 py-1 hover:border hover:border-gray-500"
          onClick={handleRegister}
        >
          Реєстрація
        </button>
      </nav>
    </div>
  );
}
