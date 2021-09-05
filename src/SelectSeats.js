import Footer from './Footer.js';
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

function Seat ({ seat, cart, setCart, ticket, setTicket }) {
    const { id, name, isAvailable } = seat;
    const [ seatStatus, setSeatStatus ] = useState(isAvailable ? "available":"unavailable");

    return (
        <div className={`seat ${seatStatus}`} onClick={() => selectSeat(cart, setCart, ticket, setTicket, id, name, seatStatus, setSeatStatus)}>
            <span>{name < 10 ? `0${name}`:name}</span>
        </div>
    );
}

function selectSeat(cart, setCart, ticket, setTicket, id, number, seatStatus, setSeatStatus) {
    const newTicket = {...ticket};
    const newCart = {...cart};

    if (seatStatus === "available") {
        newTicket.ids.push(id);
        newCart.buyingSeats.push(number);
        setSeatStatus("selected");
    } else if (seatStatus === "selected") {
        newCart.buyingSeats = cart.buyingSeats.filter((buyingSeat) => buyingSeat !== number);
        newTicket.ids = ticket.ids.filter((thisId) => thisId !== id);
        setSeatStatus("available");
    } else {
        alert("Assento indisponível!");
    }

    setCart(newCart);
    setTicket(newTicket);
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