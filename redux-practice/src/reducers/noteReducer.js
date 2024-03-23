import { ADD_NEW_NOTE, EDIT_NOTE, REMOVE_NOTE } from "../const";

const noteReducers = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NEW_NOTE:
      const generateID = new Date().getTime();
      state = [...state, { id: generateID, content: action.content }];
      return state;

    case EDIT_NOTE:
      const indexOfEditNote = state.findIndex((note) => note.id === action.id);
      if (indexOfEditNote !== -1)
        state[indexOfEditNote].content = action.content;
      return state;

    case REMOVE_NOTE:
      const idRemove = action.id;
      state = state.filter((note) => {
        if (note.id === idRemove) return false;
        return true;
      });
      return state;

    default:
      return state;
  }
};

export default noteReducers;
