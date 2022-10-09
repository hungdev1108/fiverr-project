import { AuthRoute } from "Guard/Guard";
import Home from "Pages/Home/Home";
import JobDetail from "Pages/JobDetail/JobDetail";
import ListJob from "Pages/ListJob/ListJob";
import JobListJobType from "Pages/JobListJobType/JobListJobType";
import Profile from "Pages/Profile/Profile";
import SignIn from "Pages/SignIn/SignIn";
import SignUp from "Pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import HomeTemplate from "templates/HomeTemplate/HomeTemplate";
import "./App.css";

// Lazy load - Code Splitting
// const Signin = React.lazy(() => import("./features/authentication/pages/Signin"));

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Loading /> */}
        <Switch>
          {/* Components */}
          <HomeTemplate path="/home" exact Component={Home} />
          <HomeTemplate path="/listJob/:valueSearch" exact Component={ListJob} />
          <HomeTemplate path="/jobDetail/:jobId" exact Component={JobDetail} />
          <HomeTemplate path="/jobListJobType/:jobTypeId" exact Component={JobListJobType} />

          <HomeTemplate path="/profile" exact Component={Profile} />

          <AuthRoute path="/signin" exact component={SignIn} redirectPath="/" />
          <AuthRoute path="/signup" exact component={SignUp} redirectPath="/" />

          <HomeTemplate path="/" exact Component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
