import Footer from './Footer.js';
import SuccessScreen from './SuccessScreen.js';
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function SelectSeats ({ cart, setTicket }) {
    const { sessionId } = useParams();
    cart.session = sessionId;
    const ticket = cart.ticket;
    const [ seats, setSeats ] = useState([]);
    const [ buyerName, setBuyerName ] = useState("");
    const [ buyerCpf, setBuyerCpf ] = useState("");

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
                {seats.map((seat, index) => <Seat key={index} seat={seat} ticket={ticket} setTicket={setTicket} />)}
            </div>
            <SeatClasses />
            <BuyerData buyerName={buyerName} buyerCpf={buyerCpf} setBuyerName={setBuyerName} setBuyerCpf={setBuyerCpf} />
            <Link to={isDataFilled(ticket, buyerName, buyerCpf) ? '/success':`/seats/${sessionId}`}>
                <button onClick={() => isDataFilled(ticket, buyerName, buyerCpf) ? sendPurchaseToServer(ticket, buyerName, buyerCpf):alert('Preencha todos os dados!')}>Reservar assento(s)</button>
            </Link>
            {/*<Footer movie={movie} movieInfo={movieInfo} />*/}
        </section>
    );
}

function Seat ({ seat, ticket, setTicket }) {
    const { id, name, isAvailable } = seat;
    const [ seatStatus, setSeatStatus ] = useState(isAvailable ? "available":"unavailable");

    return (
        <div className={`seat ${seatStatus}`} onClick={() => selectSeat(ticket, setTicket, id, seatStatus, setSeatStatus)}>
            <span>{name < 10 ? `0${name}`:name}</span>
        </div>
    );
}

function selectSeat(ticket, setTicket, id, seatStatus, setSeatStatus) {
    const newTicket = {...ticket};

    if (seatStatus === "available") {
        newTicket.ids.push(id);
        setTicket(newTicket);
        setSeatStatus("selected");
    } else if (seatStatus === "selected") {
        newTicket.ids = ticket.ids.filter((thisId) => thisId !== id);
        setTicket(newTicket);
        setSeatStatus("available");
    } else {
        alert("Assento indisponível!");
    }
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

function BuyerData ({ buyerName, buyerCpf, setBuyerName, setBuyerCpf }) {
    return (
        <div className="buyer-data">
            Nome do comprador:
            <input type="text" placeholder="Digite seu nome..." value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />

            CPF do comprador:
            <input type="text" placeholder="Digite seu CPF..." value={buyerCpf} onChange={(e) => setBuyerCpf(e.target.value)} />
        </div>
    );
}

function sendPurchaseToServer (ticket, buyerName, buyerCpf) {
    ticket.name = buyerName;
    ticket.cpf = buyerCpf;
    console.log(ticket);
}

function isDataFilled (ticket, buyerName, buyerCpf) {
    if (buyerName !== "" && buyerCpf !== "" && ticket.ids.length > 0) {
        return true;
    } else {
        return false;
    }
}