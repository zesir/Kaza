import logoFooter from "../assets/images/LOGO-white.png";
import Logo from "./header/Logo";

function Footer() {
  return (
      <footer className="footer">
        <Logo image={logoFooter} titre="Logo Kaza" />
        <p className="font-medium font-md light">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
  );
}
export default Footer;
