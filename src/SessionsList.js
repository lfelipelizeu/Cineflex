import Footer from './Footer.js';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function SessionsList () {
    const { movieId } = useParams();
    const [ movie, setMovie ] = useState({
        info: [],
        img: "",
    });
    const [ days, setDays ] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${movieId}/showtimes`)
            .then((response) => {
                setDays(response.data.days);
                const newMovie = {...movie};
                newMovie.info.push(response.data.title);
                newMovie.img = response.data.posterURL;
                setMovie(newMovie);
            });
    }, []);

    return (
        <section className="sessions-list">
            <h1>Selecione o horário</h1>
            {days.map((day, index) => <Day key={index} day={day} />)}
            <Footer movieInfo={movie} />
        </section>
    );
}

function Day ({ day }) {
    const { date, showtimes, weekday } = day;
    
    return (
        <div className="day">
            <h2>{weekday} - {date}</h2>
            <div className="sessions">
                {showtimes.map((showtime,index) => {
                   return (
                        <Link key={index} to={`/seats/${showtime.id}`}>
                            <button>{showtime.name}</button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}