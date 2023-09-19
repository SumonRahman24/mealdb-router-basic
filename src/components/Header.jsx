import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex gap-3 ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <NavLink to={"/meal"}>Meal</NavLink>
      </nav>
    </div>
  );
};

export default Header;
