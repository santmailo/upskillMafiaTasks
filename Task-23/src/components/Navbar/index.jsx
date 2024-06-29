import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center px-10 border-b-2 bg-gray-400 fixed top-0 left-0 right-0">
      <div className="nav-items w-1/4">
        <Link to="/dashboard">
          <img
            className="w-20 h-20"
            src="https://upskillmafia.com/dashboard/assets/logo-B822Tgcs.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav-items w-2/4 flex justify-center ">
        <NavLink to={"/"}>
          <h1 className="font-bold text-2xl">Home</h1>
        </NavLink>
      </div>
      <div className="nav-items flex justify-center w-1/4  gap-3">
        <NavLink to="/login">
          <button className="px-6 py-2 bg-green-400 outline-none font-bold  rounded-md">
            Login
          </button>
        </NavLink>
        <NavLink to="/signup">
          <button className="px-6 py-2 bg-green-400 font-bold  rounded-lg">
            SignUp
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
