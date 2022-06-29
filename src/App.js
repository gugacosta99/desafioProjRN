import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import ecolight from './assets/icons/eco-light.png';
import ecolightoff from './assets/icons/eco-light-off.png';
import logodio from './assets/icons/logo-dio.png';
import logodiowhite from './assets/icons/logo-dio-white.png';

const App = () => {

  const [toggle, setToggle] = useState(false);

  const turn_on_off = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(()=> {
      setToggle(!toggle);
    });
  }, []);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
    <TouchableOpacity onPress={turn_on_off}>
      <Image 
        source={toggle ? ecolight : ecolightoff} 
        style={toggle ? styles.lightImgOn : styles.lightImgOff}
      />
      <Image 
        source={toggle ? logodio : logodiowhite} 
        style={styles.dio_logo}
      />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightImgOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightImgOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dio_logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});

export default App;
