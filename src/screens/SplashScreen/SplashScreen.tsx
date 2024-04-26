import { ApplicationScreenProps } from '@/types/navigation';
import React from 'react'
import {View,Text,Image,StyleSheet, Button} from 'react-native';

interface Props {

}
function SplashScreen ({ navigation}: ApplicationScreenProps) {
  
    return(
        <View style={styles.container}>
          <View style={styles.child_container}>
              <Image source={require('../../theme/assets/images/logo.png')} style={styles.image} /> 
      <Text style={styles.text}>ProxymFitHub</Text>
      <Text style={styles.textInfo}>Everybody Can Train</Text>
      </View>
      <View>
      <Button color="#f194ff" title='Get started' 
      onPress={() => navigation.navigate('WelcomeScreen')}/>
      </View>
      </View>
        

    );
};
const styles = StyleSheet.create({
    container: {
     paddingTop:90,
     paddingBottom:150,
     justifyContent: 'space-between',
     alignItems: 'center',
     backgroundColor: '#fff',
     height:"100%"
    },
    child_container: {  
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      
    },
    image: {
      width: 150,
      height: 150,
    },
    text: {
      marginTop:90,
      fontSize: 32,
      fontWeight: 'bold',
    },
    textInfo: {
      fontSize: 16,
    },
    button: {
      backgroundColor:"red"
    },

  });
  
  export default SplashScreen;
