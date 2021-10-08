import { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useHistory } from "react-router-dom";

const SideNavBar = () => {
  const history = useHistory();
  const { loggedIn, setLoggedIn, user } = useContext(UserContext);

  const logoutUser = () => {
    localStorage.removeItem("jwtdatingapp");
    setLoggedIn(false);
    history.push(`/`);
  };

  return (
    <div className="sidenav">
      <div>
        <div>
        <h4>{user.name}</h4>
        <h6 style={{marginTop: 40 }}>{user.gender}</h6>
        <h6>{user.age}</h6>
        <p style={{marginTop: 40 }}>{user.bio}</p>
        </div>
        <div className="links">  
        <ul>
          <li style={{ cursor: "pointer" }}>
            <Link to="/matches" style={{color: "white", textDecoration: "none"}}>
              <i className="bi bi-box-arrow-right"></i>
              Chatrooms
            </Link>
          </li>
          {loggedIn && (
            <li style={{ cursor: "pointer" }} onClick={logoutUser}>
              <i className="bi bi-box-arrow-right"></i>
              Log Out
            </li>
          )}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
