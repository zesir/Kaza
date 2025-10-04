import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type dropProps = {
  titre: string;
  content: string;
};

function Dropdown({ titre, content }: dropProps) {
  return (
    <>
      <div className="dropdown">
        <div className="drop-label">
          <h2 className="drop-label__titre">{titre}</h2>
          <div className="drop-label__chevron">
            <FontAwesomeIcon icon={faChevronUp} className="icon-chevron" />
          </div>
        </div>
        <div className="content">
          <p className="content__text">{content}</p>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
