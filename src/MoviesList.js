import Movie from './Movie.js';

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