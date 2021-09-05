import Header from './Header.js';
import MoviesList from './MoviesList.js';
import SessionsList from './SessionsList.js';
import SelectSeats from './SelectSeats.js';
import SuccessScreen from './SuccessScreen.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

export default function App () {
    const [ showButton, setShowButton ] = useState(false);
    const [ ticket, setTicket ] = useState({});
    const [ cart, setCart ] = useState({});

    function resetPurchase () {
        setTicket({});
        setCart({});
    }

    return (
        <BrowserRouter>
            <Header
                showButton={showButton}
                setShowButton={setShowButton}
            />
            <Switch>
                <Route path="/" exact>
                    <MoviesList />
                </Route>
                <Route path="/sessions/:movieId" exact>
                    <SessionsList setShowButton={setShowButton} />
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
                    <SuccessScreen
                        cart={cart} ticket={ticket}
                        resetPurchase={resetPurchase}
                        setShowButton={setShowButton}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}