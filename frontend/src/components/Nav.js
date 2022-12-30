import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">go to home</Link>
      </div>
    </header>
  );
};
export default Navbar;
