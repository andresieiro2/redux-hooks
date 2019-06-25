import * as types from './actionTypes';

const initialState = {
  list: [],
  filterUsers: '',
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LIST_LOADED:
      return {
        ...state,
        list: action.data,
      };
    case types.SET_FILTER_USER:
      return {
        ...state,
        filterUsers: action.filterUsers,
      };
    default:
      return state;
  }
}
