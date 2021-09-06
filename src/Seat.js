import { useState } from 'react';

export default function Seat ({ seat, cart, setCart, ticket, setTicket }) {
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