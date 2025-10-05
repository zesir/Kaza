type titleProps = {
  titre: string;
};

function Title({ titre }: titleProps) {
  return (
    <>
      <h1 className="font-lg font-medium accent">{titre}</h1>
    </>
  );
}
export default Title;
