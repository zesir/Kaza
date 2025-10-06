type tagProps = {
  tag: string;
};

function Tag({ tag }: tagProps) {
  return (
    <>
      <span className="tags font-xs font-bold light">{tag}</span>
    </>
  );
}

export default Tag;
