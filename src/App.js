import Header from './Header.js';
import MoviesList from './MoviesList.js';
import SessionsList from './SessionsList.js';
import SelectSeats from './SelectSeats.js';
import SuccessScreen from './SuccessScreen.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App () {
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
                {/*<Route path="/sessions/seats" exact>
                    <SelectSeats />
                </*Route>
                {<Route path="/sessions/seats/success" exact>
                    <SuccessScreen />
                </Route>*/}
            </Switch>
        </BrowserRouter>
    );
}