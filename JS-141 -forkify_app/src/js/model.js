export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const ApiUrl = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`;

    const res = await fetch(ApiUrl);
    const data = await res.json();

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      imageUrl: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (error) {
    console.error(error);
  }

  console.log(state.recipe);
};
