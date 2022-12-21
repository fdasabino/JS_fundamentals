import PreviewView from "./previewView";

class ResultsView extends PreviewView {
  _parentElement = document.querySelector(".search-results .results");
  _errorMsg = "No recipes found for your query! Please try again ;)";
  _msg = "";

  _generateMarkup() {
    return this._data.map((data) => this._generateMarkupPreview(data)).join("");
  }
}

export default new ResultsView();
