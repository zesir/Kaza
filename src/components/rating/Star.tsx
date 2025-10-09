import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  filled: boolean;
};

function Star({ filled }: Props) {
  return (
      <li>
        <FontAwesomeIcon
          icon={faStar}
          className={`${filled ? "star__filled" : "star"}`}
        />
      </li>
  );
}
export default Star;
