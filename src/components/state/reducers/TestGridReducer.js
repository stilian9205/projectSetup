import { GridActionTypes } from '../constants/action-types/GridTestActionTypes';


// INITIALIZE STATE

const initialState = {
    make: '',
    model: '',
    price: '',
    date: ''
};


// REDUCER

export const gridState = (state = initialState, action) => {
    switch(action.type) {
        case GridActionTypes.CHANGE_SELECTED_ITEM:
            return {
                ...state,
                ...action.payload.rowData
            };
        default:
            return state;
    }
};
