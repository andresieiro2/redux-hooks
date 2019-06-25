import styled from 'styled-components';
import color from 'color';

const LoaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${color('#111')
    .alpha(0.8)
    .string()};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s;

  opacity: ${props => (props.show ? 1 : 0)};
  z-index: ${props => (props.show ? 99 : -1)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};

  img {
    height: 80px;
  }
`;

export default LoaderStyle;
