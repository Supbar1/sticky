import { Link } from "react-router-dom";

const NavbarLinks = () => (
  <>
    <div>
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

export default NavbarLinks;
