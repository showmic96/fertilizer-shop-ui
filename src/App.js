import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/sign-up";
import Dashboard from "./components/dashboard";
import createAllotment from "./components/create-allotment";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Login} exact />
      <Route path="/signUp" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/createAllotment" component={createAllotment} />
    </BrowserRouter>
  );
}

export default App;
