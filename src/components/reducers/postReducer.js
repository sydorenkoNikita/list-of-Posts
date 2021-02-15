import {ADD_POST, DELETE_POST} from "../types/types";


const initialState = {
    posts: [],
}
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, {
                    title: action.payload.title,
                    description: action.payload.description,
                    img: action.payload.img
                }]
            }
        case DELETE_POST:
            return {
                ...state, posts: [...state.posts.filter((post, id) => id !== action.idElem)]
            }
        default:
            return state;
    }
}




export default postReducer