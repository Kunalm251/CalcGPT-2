import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screen/MainScreen';


export default function App() {
  const [isloaded, setIsloaded] = useState(false);
  setTimeout(() => {
    setIsloaded(true);
  }, 2000)
  return (

<View>
  <StatusBar style="auto" />
     <MainScreen/>
    </View> 

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
