const initialState = {
    result: ""
  };
  
  const numberReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SQUARE":
        return {
          ...state,
          result: Math.pow(document.getElementById("inp").value, 2)
        };
      case "CUBE":
        return {
          ...state,
          result: Math.pow(document.getElementById("inp").value, 3)
        };
      case "SQUARE_ROOT":
        return {
          ...state,
          result: Math.sqrt(document.getElementById("inp").value)
        };
      default:
        return state;
    }
  };
  
  export default numberReducer;
  