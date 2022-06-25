import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./pages/NavBar";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChecklistPage from "./pages/ChecklistsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checklists" element={<ChecklistPage />} />
      </Routes>
    </div>
  );
}

export default App;
