import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class PaginationContainer extends React.Component {
  render() {
    const { nextPage, previousPage } = this.props;
    return(
      <Pagination>
        {previousPage !== null && <a href={`?page=${previousPage}`}>&lt;</a>}
        {nextPage !== null && <a href={`?page=${nextPage}`}>&gt;</a>}
      </Pagination>
    )
  }
}

function mapStateToProps(state) {
  return {
    nextPage: state.global.nextPage,
    previousPage: state.global.previousPage
  }
}

export default connect(mapStateToProps)(PaginationContainer);

const Pagination = styled.div`
  a:first-child {
    margin-right: 0.5em;
  }
`
