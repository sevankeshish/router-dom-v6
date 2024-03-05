import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

const Layout = () => {
  return (
    <div>
      <AppNav />
      <Outlet />
      <footer style={{ marginTop: "5rem" }}>this is the footer section</footer>
    </div>
  );
};

export default Layout;
