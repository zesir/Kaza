import { NavLink } from "react-router-dom";

type NavLink = {
  path: string;
  label: string;
};

type Props = {
  links: NavLink[];
};

function Nav({ links }: Props) {
  return (
      <nav className="nav">
        <ul className="nav__list">
          {links.map((link) => (
            <li key={link.path}>
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
  );
}

export default Nav;
