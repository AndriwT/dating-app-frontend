import axios from "axios";
import { useState, useEffect, createContext } from "react";


export const UserContext = createContext({});

const apiUrl = process.env.REACT_APP_API_URL;

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: 0,
    bio: "",
  });

  useEffect(async () => {
    checkLoggedIn();
    await getUsers();
  }, []);

  const checkLoggedIn = () => {
    const token = localStorage.getItem("jwtdatingapp");
    return token ? setLoggedIn(true) : setLoggedIn(false);
  };

  const getUsers = async () => {
    const response = await axios.get(`${apiUrl}/auth`);
    console.log(response);
    setUsers(response.data);
  };

  const loginUser = async (user) => {
    const response = await axios.post(
      `${apiUrl}/auth/login`,
      user
    );
    const { data } = response;

if (!data.token || !data.user) return;

    setUser(data.user);
    localStorage.setItem("jwtdatingapp", JSON.stringify(data.token, data.user));
    setLoggedIn(true);
    alert("Successfully Logged in!");
    console.log(response.data);
  };

  //signup
  const signupUser = async (user) => {
    const response = await axios.post(
      `${apiUrl}/auth/signup`,
      user
      );
      const { data } = response;
    if (!data.token || !data.user) return;
    setUser(data.user);
    console.log(response.data);

    // TODO: instead of just setting the user set the user to the state
    // also set the token like in the login
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        loginUser,
        setLoggedIn,
        signupUser,
        getUsers,
        loggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
