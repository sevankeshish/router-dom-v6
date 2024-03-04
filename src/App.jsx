import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNav from "./components/AppNav";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
