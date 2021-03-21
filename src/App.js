import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/sign-up";
import Dashboard from "./components/dashboard";
import CreateAllotment from "./components/create-allotment";
import MainMenu from "./components/main-menu";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/main-menu" component={MainMenu} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/allotment-creation" component={CreateAllotment} />
    </BrowserRouter>
  );
}

export default App;
