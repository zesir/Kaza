import logoImg from "../../assets/images/LOGO.png";
import headerLink from "../../data/links.json";
import Logo from "./logo";
import Nav from "./nav";

function Header() {
  return (
    <>
      <div className="header-container">
        <header>
          <Logo image={logoImg} titre="Logo Kaza" />
          <Nav links={headerLink} />
        </header>
      </div>
    </>
  );
}
export default Header;
