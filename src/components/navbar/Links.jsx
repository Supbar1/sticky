import { Link } from "react-router-dom";

export default function NavbarLinks() {
  return (
    <>
      <div className="">
        <Link to="/">Main</Link>
      </div>
      <div>
        <Link to="/community">Community</Link>
      </div>
      <div>
        <Link to="/products">Products</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}
