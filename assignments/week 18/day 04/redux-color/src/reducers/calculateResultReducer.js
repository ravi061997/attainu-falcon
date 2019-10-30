
function claculateResultReducer (result = 0, action) {

    if(action.type === "SQUARE"){
        return action.number * action.number;
    }

    if(action.type === "SQUARE_ROOT") {
        return Math.sqrt(action.number);
    }

    if(action.type === "CUBE") {
        return action.number*action.number*action.number;
    }

    return result;
}

export default claculateResultReducer;