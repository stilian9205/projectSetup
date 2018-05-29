// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';
import store from './state/stores/AppStore';
// IMPORT STORE

// IMPORT COMPONENTS

import { AppRouter } from './routers/AppRouter';


// COMPONENT

export const App = () => (
    <Provider store={store()}>
        <div className="container">
            <AppRouter />
        </div>
    </Provider>
);
