import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex justify-between flex-col h-dvh">
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
