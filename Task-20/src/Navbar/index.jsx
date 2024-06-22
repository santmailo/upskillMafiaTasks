import "./style.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2021/11/20/Dear-head-logo-vector-template-Graphics-20459855-1-580x387.jpg"
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <span className="nav-item">Home</span>
          <span>Category</span>
          <span>About Us</span>
        </div>
      </div>
    </>
  );
}
