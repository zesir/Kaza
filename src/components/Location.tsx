type locationProps = {
  location: string;
};

function Location({ location }: locationProps) {
  return (
    <>
      <div className="location">
        <p className="location__text font-sm font-medium dark">{location}</p>
      </div>
    </>
  );
}
export default Location;
