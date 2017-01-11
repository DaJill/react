export default (state={}, action) => {

    var newState = {
        event: false,
        id: null
    };

    if(state !== {}){
        newState = state;
    }
    switch(action.type){
        case "ADD_USER": 
            newState = {
                ...state,
                event: action.event,
                id: action.id
            }
            break;
        case "ADD_USER_ERR":
            newState = {
                ...state,
                event: action.event,
                id: null
            }
            break;
        default:
            break;
    }
    return newState;
}