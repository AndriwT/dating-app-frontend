import { useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import AuthView from "../views/AuthView";
import MatchView from "../views/MatchView";
import SignupView from "../views/SignupView";
import SideNavBar from "./SideNavBar";
import NotFoundPage from "./NotFoundPage";

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
            <Route exact path="/auth" component={AuthView} />
            <Route exact path="/signup" component={SignupView} />
          </>
        ) : (
          <>
            <Route exact path="/matches" component={MatchView} />
          </>
        )}
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
