import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Listar from './views/Listar';
import Inserir from './views/Inserir';
import Atualizar from './views/Atualizar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} name="Home" component={Listar} />
            <Route path="/inserir/:idAnuncio" name="Inserir" component={Inserir} />
            <Route path="/atualizar" name="Atualizar" component={Atualizar} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
