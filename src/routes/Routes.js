import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './Routes.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


import Home from './Home';
import Game from './Game';
import NoMatch from './404';


export default () => (
    <div >
        <Nav />
        <BrowserRouter>
            <Switch>
                <Route exact path='/creatin-tim/' component={Home} />
                <Route exact path='/creatin-tim/game' component={Game} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>
);