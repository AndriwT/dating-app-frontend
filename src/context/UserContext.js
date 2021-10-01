import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useHistory } from "react-router";

export const UserContext = createContext({})

const UserProvider = ({children}) => { 
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: 0,
    bio: ""
  })

  useEffect(async () => {
    const response = await getUsers()
    setUsers(response.data);
    checkLoggedIn();
  }, [])
  
  const checkLoggedIn = () => {
    const token = localStorage.getItem('jwtdatingapp');
    return token ? setLoggedIn(true) : setLoggedIn(false)
  }

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/api/auth');
    console.log(response);
    return response;
  }
  
  const loginUser = async (user) => {
    const response = await axios.post('http://localhost:5000/api/auth/login', user);
    // set token && possibly id in localStorage
    const { data } = response;
    setUser(data.user);
    localStorage.setItem('jwtdatingapp', JSON.stringify(data.token, data.user));
    setLoggedIn(true);
    console.log(response.data)
  }

  const logoutUser = async (path) => {
    localStorage.removeItem('jwtdatingapp');
    setLoggedIn(false);
    goToPath(path)
  }

  //signup
  const signupUser = async (user) => {
    const response = await axios.post('http://localhost:5000/api/auth/signup', user)
    const { data } = response;
    setUser(data.user)
    console.log(response.data);
  }

  const goToPath = (path) => {
    history.push(path);
  };


  return (
    <UserContext.Provider
    value={{
        user,
        setUser,
        users,
        setUsers,
        loginUser,
        logoutUser,
        signupUser,
        getUsers,
        loggedIn,
        goToPath
      }}
    >
      {children}
    </UserContext.Provider>
  )
  
}



export default UserProvider;