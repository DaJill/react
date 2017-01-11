import axios from 'axios';
export const fetchUserList = () => {
    return (dispatch) => {
        axios({
        url: "http://localhost:8088/api/user/list",
        timeout: 20000,
        method: "get",
        responseType: "json"
        })
        .then((response) => {
            // response.data.reverse();//由大到小
            dispatch({
                type: "FETCH_USER_LIST",
                payload: response.data
            });
        })
        .catch((err) =>{
            dispatch({
                type: "FETCH_USER_LIST_ERR",
                payload: err
            })
        })
    };
};

export const deleteUser = (_iUserID) => {
    return (dispatch) => {
        var sUrl = "http://localhost:8088/api/user/"+_iUserID;
        axios({
        url: sUrl,
        timeout: 20000,
        method: "delete",
        responseType: "json"
        })
        .then((response) => {
            dispatch({
                type: "DELETE_USER",
                event: response.data
            });
        })
        .catch((err) =>{
            dispatch({
                type: "DELETE_USER_ERR",
                event: err
            })
        })
    };
}

export const addUser = (aUser) => {
    return (dispatch) => {
        var sUrl = "http://localhost:8088/api/user/add";
        axios({
        url: sUrl,
        timeout: 20000,
        method: "post",
        responseType: "json",
        data: aUser
        })
        .then((response) => {
            dispatch({
                type: "ADD_USER",
                event: response.data.event,
                id: response.data.UserID
            });
        })
        .catch((err) =>{
            dispatch({
                type: "ADD_USER_ERR",
                event: err
            })
        })
    };
}