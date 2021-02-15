import {ADD_POST, DELETE_POST} from "../types/types";

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        idElem: id
    }
}

export const postActionCreator = (description, title, img) => {
    return {
        type: ADD_POST,
        payload: {
            description, title, img
        }
    }
}