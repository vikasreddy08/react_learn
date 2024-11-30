import { useState, useContext } from "react";
import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-around bg-orange-200 shadow-xl max-h-20">
      <div className="logo-container">
        <img className="h-20" src={APP_LOGO_URL} />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online status : {onlineStatus ? "✅" : "🛑"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          {loggedInUser && <li className="px-4 font-bold">{loggedInUser}</li>}
          <li
            className="px-4"
            onClick={() =>
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login")
            }
          >
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
