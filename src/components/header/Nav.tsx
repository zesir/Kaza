import { NavLink } from "react-router-dom";

type NavLink = {
  path: string;
  label: string;
};

type NavProps = {
  links: NavLink[];
};

function Nav({ links }: NavProps) {
  return (
    <>
      <nav className="nav">
        <ul className="nav__list">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-md font-medium ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
