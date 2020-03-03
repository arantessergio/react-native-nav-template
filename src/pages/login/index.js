import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { signin } from '../../services/auth'
import { useAuthContext } from '../../contexts/auth'

export const LoginPage = ({ navigation }) => {
    const { setToken } = useAuthContext()

    const login = async () => {
        await signin()

        setToken(true)
    }

    const goSignup = () => navigation.navigate('Signup')

    return (
        <View
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}
        >
            <TouchableOpacity style={{ height: 50 }} onPress={login}>
                <Text>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50 }} onPress={goSignup}>
                <Text>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}
