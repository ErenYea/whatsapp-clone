export const initialState = {
  user: null,
  messages: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: null,
      };
    case "REMOVE_MESSAGES":
      return {
        ...state,
        messages: state.messages.filter((x) => x != action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
