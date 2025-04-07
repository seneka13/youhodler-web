import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.webp";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#2c2d3f] text-white p-5 flex justify-between items-center">
      <button onClick={() => navigate("/")}>
        <img src={Logo} alt="YouHodler" className="h-12" />
      </button>

      <button
        onClick={() => navigate("/")}
        className="text-white bg-transparent border-none cursor-pointer"
      >
        Home
      </button>
    </header>
  );
};
