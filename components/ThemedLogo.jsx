import { Image, useColorScheme, View, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors';

import DarkLogo from '../assets/images/censono-logo.png'
import LightLogo from '../assets/images/censono-logo.png'



const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light; 
  const logo = colorScheme === 'dark' ? DarkLogo : LightLogo; 

  return (
    <Image source={logo} {...props}
     />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 12
    }
})