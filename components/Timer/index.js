import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {actionCreators} from "../../reducer"

function mapStateProps(state) {
    const {isPlaying , elapsedTime, timeDuration} = state;

    return {

        isPlaying,
        elapsedTime,
        timeDuration
    }
}

function mapDispatchProps(dispatch){
    return {
        setTimer:bindActionCreators(actionCreators.startTimer, dispatch),
        restartTimer:bindActionCreators(actionCreators.restartTimer, dispatch),
        addSeconds:actionCreators(actionCreators.addSeconds, dispatch)
    }
}

export default connect(mapStateProps , mapDispatchProps)(Timer);