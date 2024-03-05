import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppNav from "./components/AppNav";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
