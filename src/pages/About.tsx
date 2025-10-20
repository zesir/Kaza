import bannerImg from "../assets/images/Image-source-2.png";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import aboutContent from "../data/aboutContent.json";

function About() {
  return (
    <div className="wrapper">
      <Banner image={bannerImg} titre="" />
      <section className="drop-wrapper">
        {aboutContent.map((el) => (
          <Dropdown titre={el.titre} content={el.content} key={el.titre} />
        ))}
      </section>
    </div>
  );
}
export default About;
