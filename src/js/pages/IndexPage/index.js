import React from 'react';
import PropTypes from 'prop-types';

import { StoriesList } from '../../containers';
import { STORIES_TYPE } from '../../constants';

const IndexPage = ({ storyType }) => (
  <StoriesList storyType={storyType} />
);

IndexPage.propTypes = {
  storyType: PropTypes.string,
};

IndexPage.defaultProps = {
  storyType: STORIES_TYPE.TOP_STORIES,
};

export default IndexPage;
