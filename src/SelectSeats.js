import Footer from './Footer.js';
import Seat from './Seat.js';
import SeatClasses from './SeatClasses.js';
import BuyerData from './BuyerData.js';
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function SelectSeats ({ cart, setCart, ticket, setTicket }) {
    const { sessionId } = useParams();
    const [ seats, setSeats ] = useState([]);
    const [ buyerName, setBuyerName ] = useState("");
    const [ buyerCpf, setBuyerCpf ] = useState("");
    const [ movie, setMovie ] = useState({
        info: [],
        img: "",
    });

    useEffect(() => {
        axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${sessionId}/seats`)
            .then((response) => {
                setSeats(response.data.seats);
                setTicket({
                    ids: [],
                    name: "",
                    cpf: "",
                });
                setCart({
                    title: response.data.movie.title,
                    date: response.data.day.date,
                    time: response.data.name,
                    buyingSeats: []
                });
                const newMovie = {...movie};
                newMovie.info.push(response.data.movie.title);
                newMovie.info.push(`${response.data.day.weekday} - ${response.data.name}`);
                newMovie.img = response.data.movie.posterURL;
                setMovie(newMovie);
            });
    }, []);

    return (
        <section className="select-seats">
            <h1>Selecione o(s) assento(s)</h1>
            <div className="seats-list">
                {seats.map((seat, index) => <Seat key={index} seat={seat} cart={cart} setCart={setCart} ticket={ticket} setTicket={setTicket} />)}
            </div>
            <SeatClasses />
            <BuyerData
                buyerName={buyerName}
                buyerCpf={buyerCpf}
                setBuyerName={setBuyerName}
                setBuyerCpf={setBuyerCpf}
            />
            <Link to={isDataFilled(ticket, buyerName, buyerCpf) ? '/success':`/seats/${sessionId}`}>
                <button onClick={() => isDataFilled(ticket, buyerName, buyerCpf) ? sendPurchaseToServer(ticket, buyerName, buyerCpf):alert('Preencha todos os dados!')}>Reservar assento(s)</button>
            </Link>
            <Footer movieInfo={movie} />
        </section>
    );
}

function sendPurchaseToServer (ticket, buyerName, buyerCpf) {
    ticket.name = buyerName;
    ticket.cpf = buyerCpf;

    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many", ticket)
        .catch("Ocorreu algum erro!");
}

function isDataFilled (ticket, buyerName, buyerCpf) {
    if (buyerName !== "" && buyerCpf !== "" && ticket.ids.length > 0) {
        return true;
    } else {
        return false;
    }
}