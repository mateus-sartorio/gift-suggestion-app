import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});