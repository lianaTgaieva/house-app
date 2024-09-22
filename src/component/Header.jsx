import categoryicon from "../assets/images/Group 22 (3).svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header class="header">
      <div class="container">
        <Link to="/" class="btn-menu">
          <img src={categoryicon} alt="menu btn" />
        </Link>
      </div>
    </header>
  );
}

export default Header;