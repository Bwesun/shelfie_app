import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
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
             <Slot /> {/* Renders the current page based on navigation */}
        </Stack>
        {/* <Slot /> renders the current page */}
      {/* <Text>Footer</Text> */}
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})