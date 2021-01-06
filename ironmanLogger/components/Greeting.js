import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const width_proportion = '100%';

const styles = StyleSheet.create({
  backgroundImage: {
    width: width_proportion,
    height: 200,
  },
  headerText: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 0,
    width: width_proportion,
    backgroundColor: 'white',
  },
});

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View>      
      <Text style={styles.headerText}>Triathlon Training</Text>
      <ImageBackground style={styles.backgroundImage} source={require('../assets/img/pexels-bike.jpg')}>        
      </ImageBackground>
    </View>
  );
}

export default LotsOfGreetings;