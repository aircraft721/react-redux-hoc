import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

// import reducers from './reducers';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//         <App />
//     </Provider>
//     , document.getElementById('root'));


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    
    , document.getElementById('root'));

