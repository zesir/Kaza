import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="wrapper">
      <main className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">
          Oups ! La page que vous demandez n'existe pas.
        </p>

        <NavLink to="/" className="not-found__link">
          Retourner sur la page d’accueil
        </NavLink>
      </main>
    </div>
  );
}

export default NotFound;
