import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomePage } from '../../pages/home'
import { ProfilePage } from '../../pages/profile'

const Stack = createStackNavigator()

export const HomeContainer = () => (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Profile' component={ProfilePage} />
    </Stack.Navigator>
)
