function Container({ children }: { children: JSX.Element }) {
    return (
        <div className="w-11/12 m-auto py-3">
            {children}
        </div>
    );
}

export default Container