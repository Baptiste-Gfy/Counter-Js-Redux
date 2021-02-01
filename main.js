// ACTIONS
const addOneAction = {
  type: "ADD_ONE",
};

const addTenAction = {
  type: "ADD_TEN",
};

const removeOneAction = {
  type: "REMOVE_ONE",
};

const removeTenAction = {
  type: "REMOVE_TEN",
};

const resetAction = {
  type: "RESET",
};

// REDUCER
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;
    case "ADD_TEN":
      return state + 10;
    case "RESET":
      return (state = 0);
    case "REMOVE_ONE":
      return state - 1;
    case "REMOVE_TEN":
      return state - 10;
    default:
      return state;
  }
};

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

// MAIN
const renderStore = document.getElementById("render-store");
const render = () => {
  renderStore.innerHTML = store.getState();
};

store.subscribe(render);
render();

const addTen = document.getElementById("add-ten");
addTen.addEventListener("click", () => {
  store.dispatch(addTenAction);
});

const addOne = document.getElementById("add-one");
addOne.addEventListener("click", () => {
  store.dispatch(addOneAction);
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  store.dispatch(resetAction);
});

const removeOne = document.getElementById("remove-one");
removeOne.addEventListener("click", () => {
  store.dispatch(removeOneAction);
});

const removeTen = document.getElementById("remove-ten");
removeTen.addEventListener("click", () => {
  store.dispatch(removeTenAction);
});
