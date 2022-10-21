import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import signup from "./pages/signup";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import profile from "./pages/profile";
import EditProfile from "./pages/EditProfile";
import Post from "./pages/Post";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={signup} path="/signup" />
        <Route component={profile} path="/profile" />
        <Route component={Post} path="/post" />
        <Route component={EditProfile} path="/EditProfile" />
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
