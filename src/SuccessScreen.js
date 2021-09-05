import { Link } from 'react-router-dom';

export default function SuccessScreen ({ cart, ticket, resetPurchase }) {
    const { title, date, time, buyingSeats } = cart;
    const { name, cpf } = ticket;
    
    return (
        <section className="success-screen">
            <h1>Pedido feito com sucesso!</h1>
            <MovieInfo title={title} date={date} time={time} />
            <SeatsInfo seats={buyingSeats} />
            <BuyerInfo name={name} cpf={cpf} />
            <Link to="/">
                <button onClick={resetPurchase}>Voltar pra Home</button>
            </Link>
        </section>
    );
}

function MovieInfo ({ title, date, time }) {
    return (
        <div className="info">
            <h1>Filme e sessão</h1>
            <p>{title}</p>
            <p>{date} {time}</p>
        </div>
    );
}

function SeatsInfo ({ seats }) {
    return (
        <div className="info">
            <h1>Ingressos</h1>
            {seats.map((seat, index) => <p key={index}>Assento {seat}</p>)}
        </div>
    );
}

function BuyerInfo ({ name, cpf }) {
    return (
        <div className="info">
            <h1>Comprador</h1>
            <p>Nome: {name}</p>
            <p>CPF: {cpf}</p>
        </div>
    );
}