import  React , {useState, useEffect} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';



export default function App() {
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(()=>{
   
  }, [toggle]);

  return (
    <View style={toggle ? styles.containerLigth : styles.container}>

      <TouchableOpacity onPress={handleChangeToggle}>

      <Image style={toggle ? styles.lightinOn : styles.lightinOff} source={toggle ? require('./assets/icone-dio/eco-light.png') : require('./assets/icone-dio/eco-light-off.png')} />
     
      <Image style={styles.dioLogo} source={toggle ? require('./assets/icone-dio/logo-dio.png') : require('./assets/icone-dio/logo-dio-white.png')} />
     
      </TouchableOpacity>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLigth: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightinOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightinOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  }
  ,
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  }
});
