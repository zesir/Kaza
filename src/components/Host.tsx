type hostProps = {
  name: string;
  picProfile: string;
};

function Host({ name, picProfile }: hostProps) {
  const [firstName, lastName] = name.split(" ");

  return (
    <>
      <div className="host">
        <div className="host__name">
          <h4 className="font-sm font-medium accent">{firstName}</h4>

          <h4 className="font-sm font-medium accent">{lastName}</h4>
        </div>
        <div className="host__profile">
          <img src={picProfile} className="profile__pic" />
        </div>
      </div>
    </>
  );
}
export default Host;
