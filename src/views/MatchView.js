import { useContext } from "react";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";

const MatchView = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      <h1 className="view-container">
        MatchView 🥲
      </h1>
      <div>
        <UserCard />
      </div>
    </>
  );
};

export default MatchView;
