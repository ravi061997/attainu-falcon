import {createStore} from 'redux';

let counterReducer = function (state,action) {
    if(state === undefined) {
        return {
            currentScore:0
        }
    }
    if(action.type === "UPDATE_BONUS") {
        let newState = state;
        newState.currentScore = newState.currentScore + 100;
        return newState;
    }
    if(action.type === "LEVEL_COMPLETED") {
        let newState = state;
        newState.currentScore = newState.currentScore + 500;
        return newState;
    }
    if(action.type === "LIFE_LOST") {
        let newState = state;
        newState.currentScore = newState.currentScore - 250;
        return newState;
    }
    return state;
}

let store = createStore(counterReducer);

store.subscribe( function() {
    console.log(store.getState());
})

function updateBonus(){
    store.dispatch({
        type:"UPDATE_BONUS"
    })
}

function levelCompleted(){
    store.dispatch({
        type:"LEVEL_COMPLETED"
    })
}
function lifeLost(){
    store.dispatch({
        type:"LIFE_LOST"
    })
}

function main() {
    updateBonus()
    levelCompleted()
    lifeLost()
}
main();
