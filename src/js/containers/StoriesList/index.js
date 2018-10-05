import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';
import { withRouter } from 'react-router-dom';

import { getList as getStoriesAction } from '../../actions/stories';
import { Item, UnstyledList } from '../../components';
import { PaginationWrapper } from './components';

export class StoriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      perPage: 10,
    };

    this.generateStoriesList = this.generateStoriesList.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    const { getStories, storyType } = this.props;

    getStories(storyType);
  }

  componentDidUpdate(prev) {
    const { getStories, storyType, match } = this.props;
    const { page } = match.params;
    const { page: prevPage } = prev.match.params;

    if (prev.storyType !== storyType || page !== prevPage) {
      getStories(storyType);
    }
  }

  handlePageChange(pageNumber) {
    const { history, match } = this.props;

    history.push(match.path.replace(':page?', pageNumber));
  }

  generateStoriesList() {
    const { records, match } = this.props;
    const { perPage } = this.state;

    const page = match.params.page || 1;

    const start = (page - 1) * perPage;
    const end = page * perPage;

    return records.slice(start, end).map(story => (
      <Item key={story} itemId={story} renderKids={false} />
    ));
  }

  render() {
    const { isFetching, numberOfRecords, match } = this.props;
    const { perPage } = this.state;

    const page = parseInt(match.params.page, 10) || 1;

    if (isFetching) {
      return <h1>Loading...</h1>;
    }

    return (
      <Fragment>
        <UnstyledList>
          { this.generateStoriesList() }
        </UnstyledList>
        <PaginationWrapper>
          <Pagination
            activePage={page}
            itemsCountPerPage={perPage}
            totalItemsCount={numberOfRecords}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange}
          />
        </PaginationWrapper>
      </Fragment>
    );
  }
}

StoriesList.propTypes = {
  getStories: PropTypes.func.isRequired,
  records: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  numberOfRecords: PropTypes.number.isRequired,
  storyType: PropTypes.string.isRequired,
};

const mapStateToProps = ({ stories }) => ({
  records: stories.records,
  isFetching: stories.isFetching,
  numberOfRecords: stories.numberOfRecords,
});

const mapDispatchToProps = dispatch => ({
  getStories: type => dispatch(getStoriesAction(type)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoriesList));
