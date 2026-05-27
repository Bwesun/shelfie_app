import { Image, useColorScheme, View, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors';

import DarkLogo from '../assets/images/censono-logo.png'
import LightLogo from '../assets/images/censono-logo.png'




const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; 
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo; 

  return (
    <Image source={logo} {...props} style={styles.logo}
     />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
    logo: {
    width: 50,
    height: 50,
    borderRadius: 16,
    marginRight: 14,
    }
})