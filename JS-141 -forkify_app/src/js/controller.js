//// Imports
import * as model from "./model";
import recipeView from "./views/recipeView";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import "core-js/stable";
import "regenerator-runtime/runtime";

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

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
  } catch (error) {
    console.error(error);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
