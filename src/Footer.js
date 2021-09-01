import Movie from './Movie.js';

export default function ({ movie, movieInfo }) {
    const { title, img } = movie;
    return (
        <footer>
            <Movie title={title} img={img} />
            <div className="movie-info">
                <Info movieInfo={movieInfo} />
            </div>
        </footer>
    );
}

function Info ({ movieInfo }) {
    return (
        <h3>{movieInfo[0]}</h3>
    );
}