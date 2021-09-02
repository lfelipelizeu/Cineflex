import Footer from './Footer.js';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function SelectSeats ({ movie }) {
    const [ movieInfo, setMovieInfo ] = useState([movie.title, "Quinta-feira - 15:00"]);

    return (
        <section className="select-seats">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats-list">
                {seats.map((seat, index) => <Seat key={index} seat={seat} />)}
            </div>
            <SeatClasses />
            <BuyerData />
            <Link to="/sessions/seats/success">
                <button>Reservar assento(s)</button>
            </Link>
            <Footer movie={movie} movieInfo={movieInfo} />
        </section>
    );
}

function Seat ({ seat }) {
    const { number, status } = seat;
    const [ seatStatus, setSeatStatus ] = useState(status);

    function changeSeatStatus () {
        if (seatStatus === "avaible") {
            setSeatStatus("selected");
        } else if (seatStatus === "selected") {
            setSeatStatus("avaible");
        } else {
            alert("Assento indisponível!");
        }
    }

    return (
        <div className={`seat ${seatStatus}`} onClick={changeSeatStatus}>
            <span>{number < 10 ? `0${number}`:number}</span>
        </div>
    );
}

function SeatClasses () {
    return (
        <div className="seat-classes">
            <div className="seat-class">
                <div className="seat selected"></div>
                Selecionado
            </div>
            <div className="seat-class">
                <div className="seat avaible"></div>
                Disponível
            </div>
            <div className="seat-class">
                <div className="seat unavaible"></div>
                Indisponível
            </div>
        </div>
    );
}

function BuyerData () {
    return (
        <div className="buyer-data">
            Nome do comprador:
            <input type="text" placeholder="Digite seu nome..." />

            CPF do comprador:
            <input type="text" placeholder="Digite seu CPF..." />
        </div>
    );
}

const seats = [
    {
        number: 1,
        status: "avaible"
    },
    {
        number: 2,
        status: "avaible"
    },
    {
        number: 3,
        status: "avaible"
    },
    {
        number: 4,
        status: "avaible"
    },
    {
        number: 5,
        status: "avaible"
    },
    {
        number: 6,
        status: "avaible"
    },
    {
        number: 7,
        status: "avaible"
    },
    {
        number: 8,
        status: "avaible"
    },
    {
        number: 9,
        status: "avaible"
    },
    {
        number: 10,
        status: "avaible"
    },
    {
        number: 11,
        status: "avaible"
    },
    {
        number: 12,
        status: "avaible"
    },
    {
        number: 13,
        status: "avaible"
    },
    {
        number: 14,
        status: "avaible"
    },
    {
        number: 15,
        status: "avaible"
    },
    {
        number: 16,
        status: "avaible"
    },
    {
        number: 17,
        status: "avaible"
    },
    {
        number: 18,
        status: "avaible"
    },
    {
        number: 19,
        status: "avaible"
    },
    {
        number: 20,
        status: "avaible"
    },
    {
        number: 21,
        status: "avaible"
    },
    {
        number: 22,
        status: "avaible"
    },
    {
        number: 23,
        status: "avaible"
    },
    {
        number: 24,
        status: "avaible"
    },
    {
        number: 25,
        status: "avaible"
    },
    {
        number: 26,
        status: "avaible"
    },
    {
        number: 27,
        status: "avaible"
    },
    {
        number: 28,
        status: "unavaible"
    },
    {
        number: 29,
        status: "unavaible"
    },
    {
        number: 30,
        status: "unavaible"
    },
    {
        number: 31,
        status: "avaible"
    },
    {
        number: 32,
        status: "avaible"
    },
    {
        number: 33,
        status: "avaible"
    },
    {
        number: 34,
        status: "avaible"
    },
    {
        number: 35,
        status: "avaible"
    },
    {
        number: 36,
        status: "avaible"
    },
    {
        number: 37,
        status: "avaible"
    },
    {
        number: 38,
        status: "avaible"
    },
    {
        number: 39,
        status: "avaible"
    },
    {
        number: 40,
        status: "avaible"
    },
    {
        number: 41,
        status: "avaible"
    },
    {
        number: 42,
        status: "avaible"
    },
    {
        number: 43,
        status: "avaible"
    },
    {
        number: 44,
        status: "avaible"
    },
    {
        number: 45,
        status: "avaible"
    },
    {
        number: 46,
        status: "avaible"
    },
    {
        number: 47,
        status: "avaible"
    },
    {
        number: 48,
        status: "avaible"
    },
    {
        number: 49,
        status: "avaible"
    },
    {
        number: 50,
        status: "avaible"
    }
];