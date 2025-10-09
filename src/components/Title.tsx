type Props = {
  titre: string;
};

function Title({ titre }: Props) {
  return (
      <h1 className="main-title font-lg font-medium accent">{titre}</h1>
  );
}
export default Title;
