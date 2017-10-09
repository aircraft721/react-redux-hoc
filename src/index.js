import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';

import {BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import {Router} from 'react-router';
import Resources from './components/Resources';

const history = createBrowserHistory();



const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//         <App />
//     </Provider >
//     , document.getElementById('root'));


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Router history={history}>
                <div>
                    <Route path='/' component={App}></Route>
                    <Route path='/resources' component={Resources}></Route>
                </div>
            </Router>
        </BrowserRouter>
    </Provider>
    
    ,document.getElementById('root'));

