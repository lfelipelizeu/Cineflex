import Footer from './Footer.js';
import SuccessScreen from './SuccessScreen.js';
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function SelectSeats ({ cart }) {
    const { sessionId } = useParams();
    const [ seats, setSeats ] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`)
            .then((response) => {
                setSeats(response.data.seats);
            });
    }, []);

    return (
        <section className="select-seats">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats-list">
                {seats.map((seat, index) => <Seat key={index} seat={seat} cart={cart} />)}
            </div>
            <SeatClasses />
            <BuyerData />
            <Link to="/success">
                <button>Reservar assento(s)</button>
            </Link>
            {/*<Footer movie={movie} movieInfo={movieInfo} />*/}
        </section>
    );
}

function Seat ({ seat, cart }) {
    const { id, name, isAvailable } = seat;
    const [ seatStatus, setSeatStatus ] = useState(isAvailable ? "available":"unavailable");

    function selectSeat() {
        if (seatStatus === "available") {
            cart.ids.push(id);
            setSeatStatus("selected");
        } else if (seatStatus === "selected") {
            const newCart = cart.ids.filter((thisId) => thisId !== id);
            cart.ids = [...newCart];
            setSeatStatus("available");
        } else {
            alert("Assento indisponível!");
        }
    }

    return (
        <div className={`seat ${seatStatus}`} onClick={selectSeat}>
            <span>{name < 10 ? `0${name}`:name}</span>
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
                <div className="seat available"></div>
                Disponível
            </div>
            <div className="seat-class">
                <div className="seat unavailable"></div>
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