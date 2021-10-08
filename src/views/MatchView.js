import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";

const MatchView = () => {
  const { users, user } = useContext(UserContext);

  console.log(users);

  return (
    <>
      <div className="matches-container">
        <h1 className="matches-title" style={{ marginBottom: 50 }}>
          Chat Rooms
        </h1>
        {users &&
          users.map((user, i) => (
            <div key={i} className="users-container">
              <UserCard props={user} />
            </div>
          ))}
      </div>
    </>
  );
};

export default MatchView;
