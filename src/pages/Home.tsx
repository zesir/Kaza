import bannerImg from "../assets/images/Image-source-1.png";
import Banner from "../components/Banner";
import Thumb from "../components/Thumb";
import logements from "../data/logements.json";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Banner image={bannerImg} titre="Chez vous, partout et ailleurs" />
        <div className="section-logement">
          <ul className="thumb-list">
            {logements.map((logement, index) => (
              <Thumb
                key={index}
                image={logement.cover}
                title={logement.title}
                link={`/logement/${logement.id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Home;
