import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex gap-20 p-5 shadow-md shadow-slate-400 bg-zinc-200 mb-6 fixed left-0 top-0 right-0">
      <div className="ml-5">
        <img
          src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
          alt="logo"
        />
      </div>
      <div className="nav-items text-xl font-semibold flex gap-10">
        <Link to="">
          <div className="nav-item">Home</div>
        </Link>
        <Link to="/payment">
          <div className="nav-item">Payment</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
