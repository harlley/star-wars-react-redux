import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Pagination from '../containers/PaginationContainer';
import loading from '../images/loading.gif';

class Header extends React.Component {
  
  static contextTypes = { router: () => null }
   
  render() {
    const { history } = this.context.router;
    const { title } = this.props;
    return (
      <HeaderContainer>
        <a onClick={history.goBack}>&lt;</a>
        <label>
          {this.props.fetched?
            <span>{title}</span> :
            <img src={loading} alt="" />
          }
        </label>
        <Pagination />
      </HeaderContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetched: state.global.fetched
  }
}

export default connect(mapStateToProps)(Header);

const HeaderContainer = styled.header`
  background-color: #000;
  cursor: pointer;
  color: #FFBF00;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
  & a {
    color: #FFBF00 !important;
  }
  img {
    height: 2em;
  }
`