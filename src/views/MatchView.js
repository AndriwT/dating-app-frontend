import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";

const MatchView = () => {
  const { users, user } = useContext(UserContext);

  return (
    <>
      <div className="matches-container">
        <h1 className="matches-title" style={{ marginBottom: 50 }}>
          Chat Rooms
        </h1>
        {users &&
          users.map((person, i) => {
            if (person.uid === user.uid) {
              return null;
            }
            return (
              <div key={i} className="users-container">
                <UserCard props={person} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MatchView;
