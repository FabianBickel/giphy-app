import View from './view.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    const userMarkup = '';
    const markup = `
      <li class="preview">
        <a href="#${result.id}" class="preview-link">
          <img src="${result.preview}" alt="" class="preview-image">
          <div class="preview-data">
            <h4 class="preview-title">${result.title}</h4>
            ${userMarkup}
          </div>
        </a>
      </li>
    `;
    return markup;
  }

  _generateUserMarkup(user) {
    return `
      <div class="preview-user">
        <img src="${user.avatar}" alt="">
        <span>${user.displayName}</span>
      </div>
    `;
  }
}

export default new ResultsView();