import pageActions from '../constants/PageActions';

const initialState = {
    isDrawerOpen: false,
};

export function pageState(state=initialState, action) {
    switch (action.type) {
    case pageActions.DRAWER_OPEN: {
        return {
            ...state,
            isDrawerOpen: true
        };
    }
    case pageActions.DRAWER_CLOSE: {
        return {
            ...state,
            isDrawerOpen: false
        };
    }
    default:
        return state;
    }
}
