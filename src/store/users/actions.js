import * as types from './actionTypes';
import { setLoading } from '../loading/actions';

export const setFilterUser = filterUsers => ({
  type: types.SET_FILTER_USER,
  filterUsers,
});

export const listLoaded = data => ({
  type: types.LIST_LOADED,
  data,
  loading: false,
});

export const getList = () => {
  return async (dispatch, getState) => {
    console.log(dispatch);
    dispatch(setLoading(true));

    // fake call service
    const res = await new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: [
            {
              description: 'teste desativo',
              active: false,
            },
            { description: 'teste ativo', active: true },
          ],
        });
      }, 2000);
    });

    return dispatch(listLoaded(res.data));
  };
};
