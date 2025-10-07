import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type dropProps = {
  titre: string;
  content: React.ReactNode;
  open: boolean;
};

function Dropdown({ titre, content, open = false }: dropProps) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <>
      <div className="dropdown">
        <div className="drop-label" onClick={() => setIsOpen(!isOpen)}>
          <h2 className="drop-label__titre font-sm font-bold light">{titre}</h2>
          <div className={`drop-label__chevron ${isOpen ? "rotate" : ""}`}>
            <FontAwesomeIcon icon={faChevronUp} className="icon-chevron" />
          </div>
        </div>

        <div className={`drop-content ${isOpen ? "open" : ""} `}>
          <p className="drop-content__text font-sm font-regular dark">
            {content}
          </p>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
