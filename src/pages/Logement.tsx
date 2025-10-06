import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Host from "../components/Host";
import Location from "../components/Location";
import Stars from "../components/rating/Stars";
import Slider from "../components/Slider";
import Title from "../components/Title";
import logements from "../data/logements.json";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }
  const host = logement.host;
  const rating = Number(logement.rating);

  return (
    <>
      <div className="wrapper">
        <section className="section-slider">
          <Slider pictures={logement.pictures} />
        </section>
        <section className="section-details">
          <div className="logement-header">
            <Title titre={logement.title} />
            <Host name={host.name} picProfile={host.picture} />
          </div>
          <div className="logement-info">
            <Location location={logement.location} />
            <Stars rating={rating} />
          </div>
          <div className="dropdown-container">
            <Dropdown
              titre={"Description"}
              open={false}
              content={<p>{logement.description}</p>}
            />
            <Dropdown
              titre={"Equipements"}
              open={false}
              content={
                <ul>
                  {logement.equipments.map((equipment) => (
                    <li>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </section>
      </div>
    </>
  );
}
export default Logement;
