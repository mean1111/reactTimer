//import 

//Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECONDS = "ADD_SECONDS";

//Actions Creators
function startTimer() {
    return {
        type:START_TIMER
    }
}

function restartTimer() {
    return {
        type:RESTART_TIMER
    }
}

function addSeconds() {
    return {
        type:ADD_SECONDS
    }
}

//Reducer

const TIMER_DURATION = 1500;

const InitialState = {
    isPlaying:false,
    elapsedTime:0,
    timeDuration:TIMER_DURATION
}

//Reducer's Function

function reducer(state=InitialState, action) {
    switch (action.type) {
        case START_TIMER :
            return applyStartTimer(start, action)

        case RESTART_TIMER :
            return applyRestartTimer(state, action)

        case ADD_SECONDS :
            return applyAddSecond(state, action)
        
        default :
            return state;
    }
}

// Action's Creators

function applyStartTimer(state, action) {
    return {
        ...state,
        isPlaying:true,
        elapsedTime:0,
    }
}

function applyRestartTimer(state, action) {
    return {
        ...state,
        isPlaying:false,
        elapsedTime:0,
    }
}

function applyAddSecond(state, action) {
    const {elapsedTime} = state;

    if(elapsedTime < TIMER_DURATION) {
        return {
            ...state,
            elapsedTime: elapsedTime+1
        }
    }
    else {
        return {
            ...state,
            isPlaying:false
        }
    }
}

const actionCreators = {
    startTimer,
    restartTimer,
    addSeconds,
}

export {actionCreators};
export default reducer;

//fine

//객체 안에는 semicolon 사용하면 안돼
// ...state는 처음으로 돌아가는 것을 의미 : 31번째 줄