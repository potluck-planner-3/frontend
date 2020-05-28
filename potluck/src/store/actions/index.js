// import { axiosWithAuth } from "../../utils/axiosWithAuth"

// export const LOGGING_IN = "LOGGING_IN";
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const LOG_OUT = 'LOG_OUT';

// export const login = (username, password) => dispatch => {
//     dispatch({ type: LOGGING_IN });
//     axiosWithAuth()
//     .post("/api/login", {username, password})
//     .then(res => {
//         console.log('authenticate login res: ', res)
//         localStorage.setItem("token");
//         dispatch({ type: LOGIN_SUCCESS })
//     })
//     .catch(err => {
//         dispatch({ type: LOGIN_FAILURE, payload: err })
//     })
// };

// export const logOut = () => dispatch => {
//     localStorage.removeItem('token');
//     dispatch({ type: LOG_OUT});
// };

// //--------------

// //--------------

// //-------------
// export const FETCH_POTLUCKS = "FETCH_POTLUCKS"
// export const FETCH_POTLUCKS_SUCCESS = "FETCH_POTLUCKS_SUCCESS"
// export const FETCH_POTLUCKS_ERROR = "FETCH_POTLUCKS_ERROR"

// export const getPotlucks = () => (dispatch) => {
//     axiosWithAuth()
//     .get("/api/potlucks")
//     .then(res => {
//         console.log('array of potlucks(maybe)', res.data);
//         dispatch({ type: FETCH_POTLUCKS_SUCCESS, payload: res.data })
//     })
//     .catch(err => {
//         console.log(err);
//         dispatch({type: FETCH_POTLUCKS_ERROR, payload: err });
//     });
// };