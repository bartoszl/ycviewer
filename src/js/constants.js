const BACKEND_URL = 'https://hacker-news.firebaseio.com/v0';

export const API_URLS = {
  TOP_STORIES: `${BACKEND_URL}/topstories.json?print=pretty`,
  ITEM: `${BACKEND_URL}/item/{id}.json?print=pretty`,
};
