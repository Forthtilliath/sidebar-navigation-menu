import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import { sidebarData } from "./components/Nav/SidebarData";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {sidebarData.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
