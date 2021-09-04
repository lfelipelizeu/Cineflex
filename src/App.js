import Header from './Header.js';
import MoviesList from './MoviesList.js';
import SessionsList from './SessionsList.js';
import SelectSeats from './SelectSeats.js';
import SuccessScreen from './SuccessScreen.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

export default function App () {
    const [ ticket, setTicket ] = useState({
        ids: [],
        name: "",
        cpf: "",
    });

    const [ cart, setCart ] = useState({
        title: "",
        date: "",
        time: "",
        buyingSeats: []
    });

    function resetPurchase () {
        setTicket({
            ids: [],
            name: "",
            cpf: "",
        });
        setCart({
            title: "",
            date: "",
            time: "",
            buyingSeats: []
        });
    }

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <MoviesList />
                </Route>
                <Route path="/sessions/:movieId" exact>
                    <SessionsList />
                </Route>
                <Route path="/seats/:sessionId" exact>
                    <SelectSeats
                        cart={cart}
                        setCart={setCart}
                        ticket={ticket}
                        setTicket={setTicket}
                    />
                </Route>
                <Route path="/success" exact>
                    <SuccessScreen cart={cart} ticket={ticket} resetPurchase={resetPurchase} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}