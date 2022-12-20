// Imports
import * as model from "./model";
import recipeView from "./views/recipeView";
import "core-js/stable";
import "regenerator-runtime/runtime";

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    //// loading spinner
    recipeView.renderSpinner();

    //// 1 Load recipe
    await model.loadRecipe(id);

    //// 2 render recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
  }
};

["hashchange", "load"].forEach((ev) =>
  window.addEventListener(ev, controlRecipes)
);

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// f926b802-a866-48a4-9cac-6b9ddeecced4
// https://forkify-api.herokuapp.com/v2
// https://forkify-api.herokuapp.com/api/v2/recipes/:id
