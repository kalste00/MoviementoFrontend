

export function movieDetails() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            <h1>Movie Details Page</h1>
            <p>Here you can view and edit details of a specific movie.</p>
            <div className="card" style={{ marginTop: '20px' }}>
                <div style={{ marginTop: '20px' }}>

                </div>
            </div>
        </div>
    );
}