import { AuthRoute } from "Guard/Guard";
import { createBrowserHistory } from "history";
import Home from "Pages/Home/Home";
import JobDetails from "Pages/JobDetail/JobDetails";
import SignIn from "Pages/SignIn/SignIn";
import SignUp from "Pages/SignUp/SignUp";
import { Router, Switch } from "react-router-dom";
import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import "./App.css";

export const history = createBrowserHistory();

// Lazy load - Code Splitting
// const Signin = React.lazy(() => import("./features/authentication/pages/Signin"));

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {/* <Loading /> */}
        <Switch>
          {/* Components */}
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/jobDetail/:id" exact Component={JobDetails} />

          <AuthRoute path="/signin" exact component={SignIn} redirectPath="/" />
          <AuthRoute path="/signup" exact component={SignUp} redirectPath="/" />

          <HomeTemplate path="/" exact Component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
