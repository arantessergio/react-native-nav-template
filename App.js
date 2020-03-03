import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainContainer } from './src/navigators/main'
import { AuthProvider } from './src/contexts/auth'

const App = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <MainContainer />
            </AuthProvider>
        </NavigationContainer>
    )
}

export default App
