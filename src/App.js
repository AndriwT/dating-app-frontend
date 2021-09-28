import "./App.css";
import AuthView from "./views/AuthView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignupView from "./views/SignupView";

//changes the color of the app's background
document.body.style = "background: #f4f4f4";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/api/signup" component={SignupView} />
          <Route exact path="/api/auth" component={AuthView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
