import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Payments from "./components/Payments";
import Profile from "./components/Profile";
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
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
