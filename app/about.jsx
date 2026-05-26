import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const About = () => {
  return (
    <ThemedView>
      <Text>About</Text>

      <View>
              <Link href="/about" style={styles.card}>
                <Text>About</Text>
              </Link>
            </View>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({})