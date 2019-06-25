import styled from 'styled-components';

const List = styled.div`
  padding: 20px;

  background-color: #efefef;

  .item {
    display: block;
    cursor: pointer;

    > .picture {
      display: inline-block;
      vertical-align: middle;
      width: 50px;
      height: 50px;
      margin: 10px;
      border-radius: 50%;
    }

    > .description {
      display: inline-block;
      vertical-align: middle;
      font-family: Arial;
      font-size: 14px;
    }

    &.disabled {
      opacity: 0.2;
    }
  }
`;

export default List;
