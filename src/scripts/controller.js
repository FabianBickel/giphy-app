import * as model from './model.js';
import resultsView from './views/resultsView.js';

// 

if (module.hot) {
  module.hot.accept();
}

const controlSearchResults = async function () {
  try {
    const data = await model.loadSearchResults();
    console.log(data);

    resultsView.render(model.state.search.results);
  } catch (error) {
    console.error(error);
  }
};

controlSearchResults();