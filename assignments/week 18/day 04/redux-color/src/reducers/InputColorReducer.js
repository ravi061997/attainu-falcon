

function InputColorReducer(color = 'white' , action) {
    if(action.type === "RED"){
        return "red"
    }

    if(action.type === "GREEN") {
        return "green"
    }

    if(action.type === "BLUE") {
        return "blue"
    }
    return color;

}

export default InputColorReducer;