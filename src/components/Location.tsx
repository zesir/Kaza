type Props = {
  location: string;
};

function Location({ location }: Props) {
  return (
      <div className="location">
        <p className="location__text font-sm font-medium dark">{location}</p>
      </div>
  );
}
export default Location;
