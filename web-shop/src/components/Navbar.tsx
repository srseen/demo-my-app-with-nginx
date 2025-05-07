import { Link } from "react-router";
import { ModeToggle } from "./ui/mode-toggle";

const Navbar = () => {
  return (
    <nav className="bg-stone-100 dark:bg-slate-950 shadow p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="flex justify-center items-center text-lg font-bold">
          🛒 MyShop
        </h1>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="flex justify-center items-center hover:scale-110"
          >
            🏠 Home
          </Link>
          <Link
            to="/products"
            className="flex justify-center items-center hover:scale-110"
          >
            🛍 Products
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
