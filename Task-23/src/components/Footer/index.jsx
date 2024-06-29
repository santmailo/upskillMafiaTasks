import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex bg-slate-700 text-white flex  justify-around items-center p-10 ">
      <p>©️ 2024 Santmailo All rights Reserved.</p>
      <Link to="/signup">
        <button className="border-2 border-slate-400  p-2 rounded-md">
          Register for free
        </button>
      </Link>
    </div>
  );
}

export default Footer;
