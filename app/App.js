import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert, Button } from 'react-native';
import LottieView from 'lottie-react-native';
import KeepAwake from 'react-native-keep-awake';
const io = require('socket.io-client');

export default class App extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      isPress: false
    };
    this.socket = io("http://c37ff95a.ngrok.io", {
      transports: ['websocket'],
    });
  }

  componentDidMount() {        
    this.socket.on('connect', () => {
      this.setState({ isConnected: true });
    });

    this.socket.on('ping', data => {
      this.setState(data);
    });
  }

  render() {
    if (this.props.screenShouldBeAwake) {
      return (
        <View style={styles.container}>
          { this.state.isPress && <LottieView source={require('./5390-water-animation-on-the-map.json')} autoPlay loop /> }        
          <TouchableWithoutFeedback          
            onPressIn={() => {
              this.setState({
                isPress: true
              });
              this.socket.emit("pressIn");
            }}
            onPressOut={() => {
              this.setState({
                isPress: false
              });
              this.socket.emit("pressEnd");
            }}
          >
            <Text> This text is the target to be highlighted </Text>
          </TouchableWithoutFeedback>
          <KeepAwake />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          { this.state.isPress && <LottieView source={require('./5390-water-animation-on-the-map.json')} autoPlay loop /> }        
          <TouchableWithoutFeedback          
            onPressIn={() => {
              this.setState({
                isPress: true
              });
              this.socket.emit("pressIn");
            }}
            onPressOut={() => {
              this.setState({
                isPress: false
              });
              this.socket.emit("pressEnd");
            }}
          >
            <Text> This text is the target to be highlighted </Text>
          </TouchableWithoutFeedback>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
