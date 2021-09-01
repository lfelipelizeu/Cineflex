export default function SessionsList ({ movie }) {
    return (
        <section className="sessions-list">
            <h1>Selecione o horário</h1>
            {days.map((day, index) => <Day key={index} day={day} />)}
        </section>
    );
}

function Day ({ day }) {
    const { weekday, date, sessions } = day;
    
    return (
        <div className="day">
            <h2>{weekday} - {date}</h2>
            <div className="sessions">
               {sessions.map((session,index) => <div key={index} className="session">{session}</div>)}
            </div>
        </div>
    );
}

const days = [
    { 
        date: "24/06/2021",
        weekday: "Quinta-feira",
        sessions: ["15:00", "19:00"]
    },
    { 
        date: "25/06/2021",
        weekday: "Sexta-feira",
        sessions: ["15:00", "19:00"]
    }
];