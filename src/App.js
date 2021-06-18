import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SidebarData } from "./components/SidebarData";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {SidebarData.map((item, index) => (
          <Route
            path={item.path}
            exact
            component={() => item.component}
            key={index}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
