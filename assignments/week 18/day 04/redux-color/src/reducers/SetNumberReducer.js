
function SetNumberReducer(number = 0, action) {

  if(action.type === "NUMBER_CHANGED") {

    return action.typedNumber;
  }

  return number;
}
  
  export default SetNumberReducer;
  