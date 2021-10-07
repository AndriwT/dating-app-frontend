import { useState } from "react";
import { useContext } from "react";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";

const MatchView = () => {
  const { users } = useContext(UserContext);

  console.log(users);


  return (
    <>
      <h1 className="matches-title">
        MatchView 🥲
      </h1>
    <div className="matches-container">
      {users && users.map((user, i) => (
      <div key={i} className="users-container">
        <UserCard props={user} />
      </div>
      ))}
    </div>
    </>
  );
};

export default MatchView;
