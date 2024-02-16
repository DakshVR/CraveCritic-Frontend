import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useRouteError,
} from "react-router-dom";

export function Home() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/business">Business</NavLink>
        <NavLink to="/review">Review</NavLink>
        <NavLink to="/photo">Photo</NavLink>
      </nav>
      <main>{<Outlet />}</main>
    </>
  );
}
