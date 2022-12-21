import View from "./View";

class PreviewView extends View {
  _generateMarkupPreview(data) {
    const id = window.location.hash.slice(1);

    return `
      <li class="preview">
        <a class="preview__link ${
          data.id === id ? "preview__link--active" : ""
        }" href="#${data.id}">
          <figure class="preview__fig">
            <img src="${data.imageUrl}" alt="${data.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${data.title}</h4>
            <p class="preview__publisher">${data.publisher}</p>
          </div>
        </a>
      </li>`;
  }
}

export default PreviewView;
