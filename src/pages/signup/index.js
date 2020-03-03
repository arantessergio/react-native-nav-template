import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { signup } from '../../services/auth'
import { useAuthContext } from '../../contexts/auth'

export const SignupPage = ({ navigation }) => {
    const { setToken } = useAuthContext()

    const createAccount = async () => {
        await signup()

        setToken(true)
    }

    return (
        <View
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}
        >
            <TouchableOpacity style={{ height: 50 }} onPress={createAccount}>
                <Text>Create account</Text>
            </TouchableOpacity>
        </View>
    )
}
