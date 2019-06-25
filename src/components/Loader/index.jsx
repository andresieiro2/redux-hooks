import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import * as LoadingSelectors from '../../store/loading/selectors';

import LoaderStyle from './style';

import loading from './img/loading.svg';

function Loader({ show }) {
  return (
    show && (
      <LoaderStyle show={show}>
        <img src={loading} alt="Loading" />{' '}
      </LoaderStyle>
    )
  );
}

const mapStateToProps = state => ({
  show: LoadingSelectors.isLoading(state),
});

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  show: false,
};

export default connect(
  mapStateToProps,
  null
)(Loader);
