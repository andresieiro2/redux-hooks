import * as types from './actionTypes';

export const setLoading = isLoading => ({
  type: types.SET_LOADING,
  isLoading,
});
