import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
