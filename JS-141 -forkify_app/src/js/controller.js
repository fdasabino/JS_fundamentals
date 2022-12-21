//// Imports
import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView";
import bookmarksView from "./views/bookmarksView";
import "core-js/stable";
import "regenerator-runtime/runtime";

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    //// update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    //// loading spinner
    recipeView.renderSpinner();

    //// load recipes
    await model.loadRecipe(id);

    //// render recipes
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    //// render spinner
    resultsView.renderSpinner();

    //// get search query
    const query = searchView.getQuery();
    if (!query) return;

    //// load search results
    await model.loadSearchResults(query);

    //// render results
    resultsView.render(model.getSearchResultsPage());

    //// render initial pagination
    paginationView.render(model.state.search);
  } catch (error) {
    console.error(error);
  }
};

const controlPagination = function (goToPage) {
  //// render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //// render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //// update recipe servings (in state)
  model.updateServings(newServings);

  //// update the recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //// add or remove bookmarks
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  console.log(model.state.bookmarks);
  //// update recipe view
  recipeView.update(model.state.recipe);

  //// render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandleClick(controlPagination);
};

init();