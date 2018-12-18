import React , {Component} from 'react';
import {View, Text, StyleSheet, statusBar} from 'react-native'
import Button from '../Button';

function formatTime(time){
    var minutes = Math.floor(time/60);
    time -= minutes * 60;
    
    var seconds = parseInt(time%60, 10);

    return `${minutes < 10 ? `0$(minutes)` : minutes}:${seconds < 10 ? `0$ {seconds}` : seconds}`;
}

class Timer extends Component{

    componentWillReceiveProps(nextPros){
        const currentProps=this.props;
        if(!currentProps.isPlaying && nextPros.isPlaying) {
            const timerInterval = setInterval(()=>{
                currentProps.addSecond();
            }, 1000);
            this.setState({
                interval : timerInterval
            });
        }
        else if(currentProps.isPlaying && nextPros.isPlaying) {
            clearInterval(this.state.interval)
        }
    }    

    
    render() {

        const{
            isPlaying,
            elapsedTime,
            timeDuration,
            startTimer,
            restartTimer
        }

        return(
            <View style={styles.container}>
                <statusBar barStyle='light-content'/>
                <View style={styles.upper}>
                    {formatTime(timeDuration - elapsedTime)}
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                    <Button iconName="play-circle" onPress={startTimer}></Button>
                    )}
                    {isPlaying && (
                    <Button iconName="stop-circle" onPress={()=>alert("It's stop")}></Button>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:"#828282"
        },
        upper:{
            flex:2,
            justifyContent:"center",
            alignItems:"center"
        },
        lower:{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        },
        time:{
            color:"black",
            fontSize:120,
            fontWeight:"100"
        }
    }
) 

export default Timer;