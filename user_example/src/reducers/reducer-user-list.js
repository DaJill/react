export default (state={}, action) => {
    var newState = state;
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
            
        default:
            break;
    }
    return newState;

}