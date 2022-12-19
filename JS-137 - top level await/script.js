// * 137 top level await
// You can use the await keyword on its own (outside of an async function) at the top level of a
// module. This means that modules with child modules that use await will wait for the child
// modules to execute before they themselves run, all while not blocking other child modules
// from loading.

// * console.log("Before fetch");
// * const URL = "https://jsonplaceholder.typicode.com/posts";
// * const res = await fetch(URL);
// * const data = await res.json();
// * console.log(data);
// * console.log("After fetch");

// * async example (always return a promise)

console.log("Before fetch");
const getLastPost = async function () {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(URL);
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
console.log("After fetch");

// * better approach (top level await)
const lastPost = await getLastPost();
console.log(lastPost);

// ! Not very clean
// const lastPost = getLastPost();
// console.log(lastPost);
// lastPost.then((last) => console.log(last));
