import { Link } from "react-router-dom";

type Props = {
  image: string;
  title: string;
  link: string;
};

function Thumb({ image, title, link }: Props) {
  return (
      <li className="thumb">
        <Link to={link}>
          <img src={image} alt={title} />
          <div className="thumb-label">
            <h3>{title}</h3>
          </div>
        </Link>
      </li>
  );
}

export default Thumb;
