import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors' // Import the Colors object
import {StatusBar} from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'

const RootLayout = () => {
    const colorScheme = useColorScheme();

    const theme = Colors[colorScheme] ?? Colors.light; // Fallback to light theme if colorScheme is undefined
  return (
    <UserProvider>
        <StatusBar value="auto" />
        <Stack screenOptions={
            {
                headerStyle: {backgroundColor: theme.navBackground},
                headerTintColor: theme.textPrimary,
                headerTitleStyle: {fontWeight: 'semibold', fontSize: 18, color: theme.title},
                contentStyle: {backgroundColor: theme.background},
                // headerShown: false, // Hide header for all screens, can be overridden in individual screens if needed
            }
        }> {/* Navigation component that will render all changes and navigation.... Set Globally for all screens */}
            <Stack.Screen name="(auth)" options={{headerShown: false}} /> For Nested routes in folder
            <Stack.Screen name="(dashboard)" options={{headerShown: false}} /> {/* For Nested routes in folder*/}
            <Stack.Screen name="index" options={{title: 'Shelfie'}} />
             {/* Define all screens here */}
        </Stack>
    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})