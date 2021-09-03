import Movie from './Movie.js';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MoviesList () {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies")
            .then((response) => setMovies(response.data));
    }, []);

    return (
        <main>
            <h1>Selecione o filme</h1>
            <div className="movies-list">
                {movies.map((movie,index) => {
                    return (
                        <Link to={`/sessions/${movie.id}`}>
                            <Movie key={index} title={movie.title} img={movie.posterURL} />
                        </Link>
                    );
                })}
            </div>
        </main>
    );
}