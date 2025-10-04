type LogoProps = {
  image: string;
  titre: string;
};

function Logo({ image, titre }: LogoProps) {
  return (
    <>
      <div className="logo">
        <img src={image} alt={titre} />
      </div>
    </>
  );
}

export default Logo;
