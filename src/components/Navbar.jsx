import "./Navbar.css";
import QuickAccess from "./QuickAccess";
import Auth from "./Auth";

function Navbar() {
  return (
    <nav id="nav" className="nav container">
      <QuickAccess />

      <Auth />
    </nav>
  );
}

export default Navbar;
