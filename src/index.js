import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router, 
    Switch, 
    Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './component/App';
import Myapi from './component/Myapi';
import './index.css';


const history = createBrowserHistory();

ReactDOM.render(
    <Router history ={history}>
        <Switch>
            <Route exact={true} path="/" component={App} />
            <Route path="/myapi" component={Myapi} />
        </Switch>
    </Router>, 
    document.getElementById('root'));