async function getRecipeAW() {
  const IDs = await getIds();
  console.log(IDs);
  const recipe = await getRecipe()
  console.log(recipe)
  const recipe2 = await getRelated()
  console.log(recipe2)
  return recipe2
}
function getIds() {
  return new Promise(function (resolve, reject) {
    const recipeId = [234, 423, 123, 134, 123];
    resolve(recipeId)
  })
}
function getRecipe(id) {
  return new Promise(function (resolve, reject) {
    const recipe = { title: "Fresh Tomato Pasta", publisher: "Jonas" };
    resolve(recipe)
  })
}
function getRelated(publisher) {
  return new Promise(function (resolve, reject) {
    const recipe2 = { title: "Italian Pizza", publisher: "Jonas" };
    resolve(recipe2)
  })
}
getRecipeAW().then(result => console.log(`${result.title} is the best`));