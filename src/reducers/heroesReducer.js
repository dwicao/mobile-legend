import * as types from '../actions/actionTypes';

export default function heroReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_HEROES:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
