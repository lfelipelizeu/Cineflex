import Header from './Header.js';
import MoviesList from './MoviesList.js';
import SessionsList from './SessionsList.js';
import SelectSeats from './SelectSeats.js';
import SuccessScreen from './SuccessScreen.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

export default function App () {
    const cart = {
        ids: [],
        name: "",
        cpf: ""
    };

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
                    <SelectSeats cart={cart} />
                </Route><Route path="/success" exact>
                    <SuccessScreen />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}