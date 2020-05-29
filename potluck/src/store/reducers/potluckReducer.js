// import {
//     FETCH_POTLUCKS,
//     FETCH_POTLUCKS_SUCCESS,
//     FETCH_POTLUCKS_ERROR
// } from '../actions/index';

// const initialState = {
//     potlucks: [],
//     isFetching: false,

// }

// const potlucksReducer = (state = initialState, action) => {
//     switch(action.type) {
//         case FETCH_POTLUCKS: 
//         return {
//             ...state,
//             isFetching: true,
//         };
//         case FETCH_POTLUCKS_SUCCESS:
//         return {
//             ...state,
//             potlucks: action.payload,
//         }
//         case FETCH_POTLUCKS_ERROR:
//         return {
//             ...state,
//             error: action.payload
//         };
//         default: 
//         return state;
//     }
// }

// export default potlucksReducer;