import bannerImg from "../assets/images/Image-source-2.png";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

function About() {
  return (
    <>
      <div className="wrapper">
        <Banner image={bannerImg} titre="" />
        <Dropdown titre={"titre provisoire"} content="paragraphe provisoir" />
      </div>
    </>
  );
}
export default About;
