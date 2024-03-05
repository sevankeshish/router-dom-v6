import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink end to="/app">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="Posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
