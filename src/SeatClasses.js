export default function SeatClasses () {
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