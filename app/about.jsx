import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View>
      <Text>About</Text>

      <View>
              <Link href="/about" style={styles.card}>
                <Text>About</Text>
              </Link>
            </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})