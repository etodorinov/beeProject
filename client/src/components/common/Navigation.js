import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hives/catalogue"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              All Hives
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hives/search"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hives/create"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Create Hive
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/users/login"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users/register"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users/logout"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
