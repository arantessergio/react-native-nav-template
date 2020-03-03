import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginPage } from '../../pages/login'
import { SignupPage } from '../../pages/signup'

const Stack = createStackNavigator()

export const AuthContainer = () => (
    <Stack.Navigator initialRouteName='Signin'>
        <Stack.Screen name='Signin' component={LoginPage} />
        <Stack.Screen name='Signup' component={SignupPage} />
    </Stack.Navigator>
)
