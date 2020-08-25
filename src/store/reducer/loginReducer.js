
const defaultState = {
  username: "",
  password: "",

};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state)); //深拷贝原始数据
  switch (action.type) {
    case "username":
      // console.log(action.value);
      newState.username = action.value;
      break;
    case "password":
      newState.password = action.value;
      break;

    default:
      break;
  }
  return newState;
};
