export default (state={}, action) => {
    var newState = {
            event: false,
            data: []
    };
    if(state !== {}){
        newState = state;
    }
    
    switch(action.type){
        case "FETCH_USER_LIST": 
            newState = {
                ...state,
                event: true,
                data: action.payload
            }
            break;

        case "FETCH_USER_LIST_ERR": 
            newState = {
                ...state,
                event: false,
                data: action.payload
            }
            break;
        case "DELETE_USER": 
            newState = {
                ...state,
                event: action.event
            }
            break;
        case "DELETE_USER_ERR":
            newState = {
                ...state,
                event: action.event
            }
            break;
        default:
            break;
    }
    return newState;

}