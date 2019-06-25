import { createSelector } from 'reselect';

export const getUserList = state => state.users.list;
export const getFilterUser = state => state.users.filterUsers;

export const getFilteredListUser = createSelector(
  [getFilterUser, getUserList],
  (filter, list) => {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return list.filter(user => user.active);
      case 'SHOW_DISABLED':
        return list.filter(user => !user.active);
      default:
        return list;
    }
  }
);
