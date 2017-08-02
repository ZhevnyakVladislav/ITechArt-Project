import drawer from '../constants/PageActions';

const initialState = {
    isDrawerOpen: false,
};

export function drawerState(state=initialState, action) {
    switch (action.type) {
    case drawer.OPEN: {
        return {
            ...state,
            isDrawerOpen: true
        };
    }
    case drawer.CLOSE: {
        return {
            ...state,
            isDrawerOpen: false
        };
    }
    default:
        return state;
    }
}
