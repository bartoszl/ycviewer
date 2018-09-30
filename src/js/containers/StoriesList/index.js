import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getList as getStoriesAction } from '../../actions/stories';
import { Item } from '../../components';

class StoriesList extends Component {
  constructor(props) {
    super(props);

    this.generateStoriesList = this.generateStoriesList.bind(this);
  }

  componentDidMount() {
    const { getStories } = this.props;

    getStories();
  }

  generateStoriesList() {
    const { records } = this.props;

    return records.map(story => (
      <Item itemId={story} renderKids={false} />
    ));
  }

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return <h1> Loading... </h1>;
    }

    return (
      <ul>
        { this.generateStoriesList() }
      </ul>
    );
  }
}

StoriesList.propTypes = {
  getStories: PropTypes.func.isRequired,
  records: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ stories }) => ({
  records: stories.records,
  isFetching: stories.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getStories: () => dispatch(getStoriesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriesList);
