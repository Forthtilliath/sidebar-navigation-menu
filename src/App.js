import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SidebarData } from "./components/SidebarData";
import NotFound from "./pages/NotFound";

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
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

// NOTE
// https://stackoverflow.com/questions/45898789/react-router-pass-param-to-component
// https://medium.com/@nutanbhogendrasharma/create-multiple-pages-using-routing-in-react-part-2-5d667ca051c6
// https://www.wanadev.fr/204-react-js-2-comment-gerer-le-routing-et-la-securite-sur-une-application-react/
