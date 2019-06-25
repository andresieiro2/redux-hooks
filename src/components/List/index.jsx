import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import ListStyle from './style';

import * as UserActions from '../../store/users/actions';
import * as UserSelectors from '../../store/users/selectors';

import user from './images/user.png';

const List = () => {
  const dispatch = useDispatch();
  const list = useSelector(UserSelectors.getFilteredListUser);

  return (
    <ListStyle>
      <select
        onChange={e => {
          dispatch(UserActions.setFilterUser(e.target.value));
        }}
      >
        <option value="">Selecione um tipo</option>
        <option value="SHOW_ACTIVE">Ativos</option>
        <option value="SHOW_DISABLED">Desabilitados</option>
      </select>

      {list &&
        list.map((item, index) => (
          <a
            className={classNames({ disabled: !item.active }, 'item')}
            href="#"
            key={`list-users-${index}`}
          >
            <img className="picture" src={user} alt={item.description} />
            <h2 className="description">{item.description}</h2>
          </a>
        ))}
    </ListStyle>
  );
};

export default List;
