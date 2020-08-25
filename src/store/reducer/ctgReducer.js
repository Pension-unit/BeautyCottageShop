const defaultState = {
  ctgSort: "shop",
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SortToScene":
      newState.ctgSort = action.payload.sort;
      break;
    case "SortToPro":
      newState.ctgSort = action.payload.sort;
      break;
    case "SortToShop":
      newState.ctgSort = action.payload.sort;
      break;
    default:
      break;
  }
  return newState;
};
