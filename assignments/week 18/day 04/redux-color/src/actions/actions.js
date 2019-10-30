import {store} from '../store.js';

function calculateSquare(num) {
    store.dispatch({
        type:"SQUARE",
        number:num
    })
}

function calculateCube(num) {
    store.dispatch({
        type:"CUBE",
        number:num
    })
}

function calculateSquareRoot(num) {
    store.dispatch({
        type:"SQUARE_ROOT",
        number:num
    })
}

function changeColorToRed() {
    store.dispatch({
        type:"RED"
    })
}

function changeColorToGreen() {
    store.dispatch({
        type:"GREEN"
    })
}

function changeColorToBlue() {
    store.dispatch({
        type:"BLUE"
    })
}

export {calculateSquare,calculateCube,calculateSquareRoot,changeColorToRed,changeColorToGreen,changeColorToBlue}