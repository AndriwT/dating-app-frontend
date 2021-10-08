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

  console.log(user);

  useEffect(  () => {
    checkLoggedIn();
    getUsers();
  }, []);

  const getUserById = async (id) => {
    const response = await axios.get(`${apiUrl}/api/auth/${id}`);
    return response.data;
  }
 
  
  const getUsers = async () => {
    const response = await axios.get(`${apiUrl}/api/auth`);
    console.log(response);
    setUsers(response.data);
    return response.data;
  };

  const checkLoggedIn = async () => {
    const token = localStorage.getItem("jwtdatingapp");

    
    if (token) {
      let payload = token.split(".")[1]
      payload = atob(payload);
      console.log(payload);
      const userId = JSON.parse(payload).uid;
      const userFromDB =  await getUserById(userId);
      setUser(userFromDB);
    }
    // setUser({ ...user, uid: JSON.parse(payload).uid});

    return token ? setLoggedIn(true) : setLoggedIn(false);
  };

  const loginUser = async (user) => {
    const response = await axios.post(
      `${apiUrl}/api/auth/login`,
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
      `${apiUrl}/api/auth/signup`,
      user
      );
      const { data } = response;
    if (!data.token || !data.user) return;
    setUser(data.user);
    console.log(response.data);
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
       // messages,
        //getMessagesByChatroomId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
