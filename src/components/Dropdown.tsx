import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Props = {
  titre: string;
  content: React.ReactNode;
};

function Dropdown({ titre, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

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
