import React from 'react';

import { connect } from 'react-redux';
import DefaultLayout from '../../layouts/default';
import List from '../../components/List';

import * as UserActions from '../../store/users/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <>
        <List />
      </>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  getList: () => {
    dispatch(UserActions.getList());
  },
});

export default DefaultLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
