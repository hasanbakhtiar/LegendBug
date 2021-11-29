import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configuraStore from './store/configuraStore';
import {getBlogsFromDatabase} from './actions/blogs';
import './firebase/firebaseConfig';
import reactDom from 'react-dom';


const store  =  configuraStore();












const result=(

        <Provider store={store}>
            <AppRouter />
        </Provider>
    )




ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(()=>{
    ReactDOM.render(result, document.getElementById('root'));
})

