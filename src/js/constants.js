const BACKEND_URL = 'https://hacker-news.firebaseio.com/v0';

export const API_URLS = {
  TOP_STORIES: `${BACKEND_URL}/topstories.json?print=pretty`,
  NEW_STORIES: `${BACKEND_URL}/newstories.json?print=pretty`,
  BEST_STORIES: `${BACKEND_URL}/beststories.json?print=pretty`,
  ITEM: `${BACKEND_URL}/item/{id}.json?print=pretty`,
};

export const STORIES_TYPE = {
  TOP_STORIES: 'TOP_STORIES',
  NEW_STORIES: 'NEW_STORIES',
  BEST_STORIES: 'BEST_STORIES',
};

export const ITEM_TYPE = {
  COMMENT: 'comment',
  STORY: 'story',
  JOB: 'job',
};
