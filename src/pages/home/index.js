import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { signout } from '../../services/auth'
import { useAuthContext } from '../../contexts/auth'

export const HomePage = ({ navigation }) => {
    const { setToken } = useAuthContext()

    const goProfile = () => navigation.navigate('Profile')

    const logout = async () => {
        await signout()

        setToken(false)
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
            <TouchableOpacity style={{ height: 50 }} onPress={goProfile}>
                <Text>Go profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50 }} onPress={logout}>
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}
