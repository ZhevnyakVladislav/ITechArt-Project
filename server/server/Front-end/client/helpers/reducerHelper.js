export default function createReducer(initialState, actionHash) {
    return (state = initialState, action) => { 
        if(actionHash[action.type]) {
            return actionHash[action.type](state, action);
        } else {
            return state;
        }
    };
};
