type bannerProps = {
  image: string;
  titre: string;
};

function Banner({ image, titre }: bannerProps) {
  return (
    <>
      <div className="banner">
        <img src={image} alt={titre} />
        <h1 className=" font-xl font-bold light">{titre}</h1>
      </div>
    </>
  );
}
export default Banner;
