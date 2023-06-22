import { API_URL, API_KEY, RESULTS_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  selectedGif: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
  }
};

export const loadSearchResults = async function (query) {
  try {
    if (!state.search.query) {
      await loadTrending();
      return;
    }

    throw Error('Search not implemented yet');
  } catch (error) {
    throw error;
  }
};

async function loadTrending() {
  const data = await getJSON(
    `${API_URL}gifs/trending?api_key=${API_KEY}&limit=${state.search.resultsPerPage}&rating=g`
  );
  console.log(data);

  state.search.results = data.data.map(element => {
    return {
      id: element.id,
      type: element.type,
      title: element.title,
      preview: element.images.preview_gif.url,
      original: element.images.original.url,
      user: element.user ? {
        avatar: element.user.avatar_url,
        displayName: element.user.display_name,
        userName: element.user.username,
        profileUrl: element.user.profile_url,
        websiteUrl: element.user.website_url,
      } : undefined,
    };
  });
  console.log(state.search.results);
}