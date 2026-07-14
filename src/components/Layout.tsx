import { NavLink, Outlet } from "react-router-dom";
import profileImage from "../assets/Resim1.jpg";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <header className="navbar">
        <div className="brand">
          <img
            src={profileImage}
            alt="Turgut Köksal"
            className="brand-avatar"
          />
          <p>Turgut Köksal</p>
        </div>
        <nav className="menu">
          <NavLink to="/">Hakkımda</NavLink>         
          <NavLink to="/projects">Projelerim</NavLink>
          <NavLink to="/contact">İletişim</NavLink>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
      
    </div> 
  );
};

export default Layout;
