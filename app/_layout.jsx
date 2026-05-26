import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
    const colorScheme = useColorScheme();
    console.log('Current color scheme:', colorScheme); // Debugging line to check the color scheme value
  return (
    <View style={{flex: 1}}>
        <Stack screenOptions={
            {
                headerStyle: {backgroundColor: '#0B1835'},
                headerTintColor: '#F4F7FF',
                headerTitleStyle: {fontWeight: '700'},
                contentStyle: {backgroundColor: '#071228'},
                headerShown: false, // Hide header for all screens, can be overridden in individual screens if needed
            }
        }> {/* Navigation component that will render all changes and navigation.... Set Globally for all screens */}
            {/* <Stack.Screen name="index" options={{title: 'Shelfie'}} />
            <Stack.Screen name="about" options={{title: 'About Shelfie'}} />
            <Stack.Screen name="contact" options={{title: 'Contact Us'}} /> */}
             {/* Define all screens here */}
        </Stack>
        {/* <Slot /> renders the current page */}
      {/* <Text>Footer</Text> */}
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})