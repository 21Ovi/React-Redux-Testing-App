import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from "actions/types";
import axios from "axios";

import "setupTest";

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments() {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn,
  };
};
