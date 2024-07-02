import ActionTypes from "../actionTypes";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, data: state.data.concat(action.payload) };
  }
  return state;
};

export default basketReducer;
