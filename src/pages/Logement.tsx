import { useParams } from "react-router-dom";
import Host from "../components/Host";
import Location from "../components/Location";
import Stars from "../components/rating/Stars";
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
        <section className="section-details">
          <div className="logement-header">
            <Title titre={logement.title} />
            <Host name={host.name} picProfile={host.picture} />
          </div>
          <div className="logement-info">
            <Location location={logement.location} />
            <Stars rating={rating} />
          </div>
        </section>
      </div>
    </>
  );
}
export default Logement;
