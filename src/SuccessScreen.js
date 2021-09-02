export default function SuccessScreen () {
    return (
        <section className="success-screen">
            <h1>Pedido feito com sucesso!</h1>
            <MovieInfo />
            <SeatsInfo />
            <BuyerInfo />
            <button>Voltar pra Home</button>
        </section>
    );
}

function MovieInfo ({ }) {
    return (
        <div className="info">
            <h1>Filme e sessão</h1>
            <p>2067</p>
            <p>24/06/2021 15:00</p>
        </div>
    );
}

function SeatsInfo ({ }) {
    return (
        <div className="info">
            <h1>Ingressos</h1>
            <p>Assento 15</p>
            <p>Assento 16</p>
        </div>
    );
}

function BuyerInfo ({ }) {
    return (
        <div className="info">
            <h1>Comprador</h1>
            <p>Nome: João da Silva Sauro</p>
            <p>CPF: 123.456.789-10</p>
        </div>
    );
}