type Props = {
  image: string;
  titre: string;
};

function Logo({ image, titre }: Props) {
  return (
      <div className="logo">
        <img src={image} alt={titre} />
      </div>
  );
}

export default Logo;
