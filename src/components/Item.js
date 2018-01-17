import React from 'react';
import styled from 'styled-components';

export default class Item extends React.Component {
  render() {
    const { topText, bottomText, onClickDetails } = this.props;
    const hasDetails = () => (typeof(onClickDetails) === 'function');
    return(
      <ItemContainer>
        <div>
          <label>{topText}</label>
          <span>{bottomText}</span>
        </div>
        { hasDetails() &&
          <a onClick={onClickDetails}>&gt;</a>
        }
      </ItemContainer>
    )
  }
}

const ItemContainer = styled.div`
  border-bottom: 1px solid #D4D4D4;
  background-color: #FFF;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  a {
    cursor: pointer;
  }
  label {
    font-weight: 400;
    display: block;
  }
`
