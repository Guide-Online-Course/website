import ActionTypes from "../constants/actionType";

export default (state = {}, action) => {
  switch (action.type) {
    // case ActionTypes.LOGIN:
    //   return action.payload;

    // case ActionTypes.SIGNUP:
    //   return action.payload;

    case ActionTypes.LOGOUT:
      return {};

    default:
      return state;
  }
};
