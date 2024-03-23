import { ADD_NEW_NOTE, EDIT_NOTE, REMOVE_NOTE } from "../const";

export const actAddNote = (content) => {
  return {
    type: ADD_NEW_NOTE,
    content,
  };
};

export const actRemoveNote = (id) => {
  return {
    type: REMOVE_NOTE,
    id,
  };
};

export const actEditNote = (id, content) => {
  return {
    type: EDIT_NOTE,
    id,
    content,
  };
};
