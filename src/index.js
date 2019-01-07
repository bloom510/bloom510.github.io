import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import App from './components/App';
import FlipContainer from './components/card/FlipContainer';
import NotFound from './components/NotFound'

import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/css/index.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <BrowserRouter>
            <App>
                <CssBaseline />
                <FlipContainer />
            </App>
        </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
