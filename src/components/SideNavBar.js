import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useHistory } from "react-router-dom";



const SideNavBar = () => {
const history = useHistory()
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const logoutUser =  () => {
    localStorage.removeItem('jwtdatingapp');
    setLoggedIn(false);
     history.push(`/auth`);
  }



  return (
    <div className="sidenav">
      <ul>
        {/* <li>
          <Link to="/manageTopics">
            <i className="bi bi-gear-fill"></i>
            Manage Topics
          </Link>
        </li> */}
        { loggedIn && (
          <li style={{ cursor: "pointer" }} onClick={logoutUser}>
            <i className="bi bi-box-arrow-right"></i>
            Log Out
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideNavBar;
