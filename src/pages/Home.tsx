import bannerImg from "../assets/images/Image-source-1.png";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <div className="wrapper">
        <Banner image={bannerImg} titre="Chez vous, partout et ailleurs" />
      </div>
    </>
  );
}
export default Home;
