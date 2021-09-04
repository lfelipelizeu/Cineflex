import Movie from './Movie.js';

export default function ({ movieInfo }) {
    const { info, img } = movieInfo;
    return (
        <footer>
            <Movie title={info[0]} img={img} />
            <div className="movie-info">
                <Info movieInfo={info} />
            </div>
        </footer>
    );
}

function Info ({ movieInfo }) {
    return (
        <>
            <h3>{movieInfo[0]}</h3>
            <h3>{movieInfo[1]}</h3>
        </>
    );
}