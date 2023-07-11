function Container({ content }: { content: JSX.Element }) {
    return (
        <div className="w-11/12 m-auto py-3">
            {content}
        </div>
    );
}

export default Container