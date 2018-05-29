// IMPORT PACKAGE REFERENCES
import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { gridState } from '../reducers/TestGridReducer';


// EXPORT APP REDUCER

export const rootReducer = combineReducers({
    gridData: gridState
});
