import { SAVE_COMMENT } from "./types";
import { FETCH_COMMENTS } from "./types";
import axios from "axios";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get(`http://jsonplaceholder.typicode.com/comments`);

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}
