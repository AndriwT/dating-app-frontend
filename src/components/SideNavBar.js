import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useHistory } from "react-router-dom";



const SideNavBar = () => {
const history = useHistory()
  const { loggedIn, setLoggedIn, user } = useContext(UserContext);

  const logoutUser =  () => {
    localStorage.removeItem('jwtdatingapp');
    setLoggedIn(false);
     history.push(`/auth`);
  }



  return (
    <div className="sidenav">
    <div >
      <h3>{user.name}</h3>
      <ul>
        <li style={{ cursor: "pointer"}} >
          <Link to="/matches">
            <i className="bi bi-box-arrow-right"></i>
            ChatRooms
          </Link>
        </li>
        { loggedIn && (
          <li style={{ cursor: "pointer" }} onClick={logoutUser}>
            <i className="bi bi-box-arrow-right"></i>
            Log Out
          </li>
        )}
      </ul>
    </div>
    </div>
  );
};

export default SideNavBar;
