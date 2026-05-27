import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

// Themed Components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import ThemedCard from "../../components/ThemedCard";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';
import ThemedButton from '../../components/ThemedButton';

const Login = () => {

    const handleSubmit = () => {
        console.log('Login Form Submitted!')
    }
  return (
    <ThemedView style={styles.container}>
      
      <Spacer />
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <ThemedText title={true} style={styles.title}>
            Login to your Android
        </ThemedText>
      </View>

      <TextInput placeholder='Email' />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href={'/register'}>
        <ThemedText style={{textAlig: 'center'}}>
            Register instead
        </ThemedText>
      </Link>

      <Link href={'/'}>
        <ThemedText style={{textAlig: 'center'}}>
            Home
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 12,
        borderRadius: 5
    },
    pressed: {
        opacity: 0.5
    }
})