export default function MoviesList ({ movies }) {
    return (
        <main>
            <h1>Selecione o filme</h1>
            <div className="movies-list">
               {movies.map((movie,index) => <Movie key={index} title={movie.title} img={movie.img} />)}
            </div>
        </main>
    );
}

function Movie ({ title, img }) {
    return (
        <div className="movie">
            <img src={img} alt={title} />
        </div>
    );
}