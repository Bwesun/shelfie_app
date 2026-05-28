import { Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { useState } from 'react'

// Themed Components
import ThemedView from "../../components/ThemedView";
import ThemedLogo from "../../components/ThemedLogo";
import ThemedCard from "../../components/ThemedCard";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { useUser } from '../../hooks/useUser';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState(null)

    const {login} = useUser()

    const handleSubmit = async () => {
        setError(null)
        try{
            await login(email, password)
        } catch (error){
            setError(error.message)
        }
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      
      <Spacer />
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <ThemedText title={true} style={styles.title}>
            Login to your Android
        </ThemedText>
      </View>

      <ThemedTextInput 
        style={{width: '80%', marginBottom: 30}}
        placeholder='Email' 
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <ThemedTextInput 
        style={{width: '80%', marginBottom: 30}}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: '#f2f2f2' }}>Login</Text>
      </ThemedButton>

      <Spacer height={20} />
      {error && <Text style={styles.error}>{error}</Text>}

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
    </TouchableWithoutFeedback>
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
    },
    error:{
        color: Colors.warning,
        padding: 5,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6, 
        marginHorizontal: 10,
    }
})