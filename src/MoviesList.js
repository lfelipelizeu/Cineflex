import Movie from './Movie.js';
import { Link } from 'react-router-dom';

export default function MoviesList ({ movies }) {
    return (
        <main>
            <h1>Selecione o filme</h1>
            <div className="movies-list">
                {movies.map((movie,index) => {
                    return (
                        <Link to="/sessions">
                            <Movie key={index} title={movie.title} img={movie.img} />
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}