import { legacy_createStore as createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const span = document.querySelector("span");

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return (state += 1);
    case "MINUS":
      return (state -= 1);
  }
};
const store = createStore(reducer);

const onAddClick = () => {
  store.dispatch({ type: "ADD" });
  span.innerText = store.getState();
};

const onMinusClick = () => {
  store.dispatch({ type: "MINUS" });
  span.innerText = store.getState();
};

add.addEventListener("click", onAddClick);
minus.addEventListener("click", onMinusClick);

console.log(store);
