import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import { withRouter } from 'react-router-dom';

import { getList as getStoriesAction } from '../../actions/stories';
import { Item } from '../../components';

const StoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

class StoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      perPage: 10,
    };

    this.generateStoriesList = this.generateStoriesList.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const { getStories } = this.props;

    getStories();
  }

  handlePageChange(pageNumber) {
    const { history } = this.props;

    history.push(`/${pageNumber}`);
  }

  generateStoriesList() {
    const { records, match } = this.props;
    const { perPage } = this.state;

    const page = match.params.page || 1;

    const start = (page - 1) * perPage;
    const end = page * perPage;

    return records.slice(start, end).map(story => (
      <Item itemId={story} renderKids={false} />
    ));
  }

  render() {
    const { isFetching, numberOfRecords } = this.props;
    const { page, perPage } = this.state;

    if (isFetching) {
      return <h1> Loading... </h1>;
    }

    return (
      <Fragment>
        <StoryList>
          { this.generateStoriesList() }
        </StoryList>
        <Pagination
          activePage={page}
          itemsCountPerPage={perPage}
          totalItemsCount={numberOfRecords}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}

StoriesList.propTypes = {
  getStories: PropTypes.func.isRequired,
  records: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  numberOfRecords: PropTypes.number.isRequired,
};

const mapStateToProps = ({ stories }) => ({
  records: stories.records,
  isFetching: stories.isFetching,
  numberOfRecords: stories.numberOfRecords,
});

const mapDispatchToProps = dispatch => ({
  getStories: () => dispatch(getStoriesAction()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoriesList));
