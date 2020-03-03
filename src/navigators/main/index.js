import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SplashPage } from '../../pages/splash'
import { HomeContainer } from '../home'
import { AuthContainer } from '../auth'
import { useAuthContext } from '../../contexts/auth'

const Stack = createStackNavigator()

export const MainContainer = () => {
    const [loading, setLoading] = useState(true)
    const { token } = useAuthContext()

    useEffect(() => {
        token !== null && setLoading(false)
    }, [token])

    if (loading) {
        return <SplashPage />
    }

    return (
        <Stack.Navigator>
            {token ? (
                <Stack.Screen
                    name='Home'
                    component={HomeContainer}
                    options={{ headerShown: false }}
                />
            ) : (
                <Stack.Screen
                    name='Auth'
                    component={AuthContainer}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    )
}
