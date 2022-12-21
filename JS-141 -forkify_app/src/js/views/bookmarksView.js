import PreviewView from "./previewView";

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMsg = "No bookmarks yet. Find a nice recipe and bookmark it ;)";
  _msg = "";

  _generateMarkup() {
    return this._data
      .map((bookmark) => this._generateMarkupPreview(bookmark))
      .join("");
  }
}

export default new BookmarksView();
