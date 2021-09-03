import Footer from './Footer.js';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function SessionsList () {
    const { movieId } = useParams();
    const [ movie, setMovie ] = useState({});
    const [ days, setDays ] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${movieId}/showtimes`)
            .then((response) => {
                setMovie(response.data);
                setDays(response.data.days);
            });
    }, {});

    return (
        <section className="sessions-list">
            <h1>Selecione o horário</h1>
            {days.map((day, index) => <Day key={index} day={day} />)}
            {/*<Footer movie={movie} movieInfo={movieInfo} />*/}
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
                        <Link to={`/seats/${showtime.id}`}>
                            <button key={index}>{showtime.name}</button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}