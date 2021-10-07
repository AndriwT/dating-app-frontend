import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import AuthView from "../views/AuthView";
import MatchView from "../views/MatchView";
import SignupView from "../views/SignupView";
import SideNavBar from "./SideNavBar";
import NotFoundPage from "./NotFoundPage";
import ChatRoomView from "../views/ChatRoomView";

const AppRouter = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <BrowserRouter>
    { loggedIn && (
      <SideNavBar />
    )}
      <Switch>
        { !loggedIn ? (
          <>
            <Route exact path="/" component={AuthView} />
            <Route exact path="/signup" component={SignupView} />
          </>
        ) : (
          <>
            <Route exact path="/matches" component={MatchView} />
            <Route exact path="/chatroom" component={ChatRoomView} />
          </>
        )}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
