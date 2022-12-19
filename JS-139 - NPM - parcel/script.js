// * 139 - NPM - node package manager
import { cloneDeep } from "lodash-es";

const state = {
  cart: [
    { product: "bread", qty: 5 },
    { product: "pizza", qty: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const cloneDeepState = cloneDeep(state);

stateClone.user.loggedIn = false;
console.log(stateClone);

console.log(cloneDeepState);

////parcel configuration////
if (module.hot) {
  module.hot.accept();
}
////////////////////////
