import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import FlipContainer from './components/card/FlipContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles/css/index.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
            <App>
                <CssBaseline />
                <FlipContainer />
            </App>
, document.getElementById('root'));
registerServiceWorker();
