type Props = {
    tag: string;
};

function Tag({ tag }: Props) {
    return (
        <span className="tags font-xs font-bold light">{tag}</span>
    );
}

export default Tag;
