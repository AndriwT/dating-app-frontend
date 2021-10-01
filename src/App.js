import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <React.Fragment>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </React.Fragment>
  );
}

export default App;
