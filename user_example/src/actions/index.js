import axios from 'axios';
export const fetchUserList = () => {
    return (dispatch) => {
        return axios({
        url: "http://localhost:8088/api/user/list",
        timeout: 20000,
        method: "get",
        responseType: "json"
        })
        .then((response) => {
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