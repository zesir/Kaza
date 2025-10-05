import { useParams } from "react-router-dom";
import Host from "../components/host";
import Title from "../components/title";
import logements from "../data/logements.json";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }
  const host = logement.host;

  return (
    <>
      <div className="wrapper">
        <div className="logement-header">
          <Title titre={logement.title} />
          <Host name={host.name} picProfile={host.picture} />
        </div>
      </div>
    </>
  );
}
export default Logement;
