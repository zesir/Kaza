import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type starProps = {
  filled: boolean;
};

function Star({ filled }: starProps) {
  return (
    <>
      <li>
        <FontAwesomeIcon
          icon={faStar}
          className={`${filled ? "star__filled" : "star"}`}
        />
      </li>
    </>
  );
}
export default Star;
