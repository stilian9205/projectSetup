import { GridActionTypes } from '../constants/action-types/GridTestActionTypes';

const changeSelectedItem = (rowData) => {
    return {
        type: GridActionTypes.CHANGE_SELECTED_ITEM,
        payload: {
            rowData
        }
    };
};


// EXPORT ACTIONS

export {
    changeSelectedItem
};
