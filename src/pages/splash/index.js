import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const SplashPage = () => {
    return (
        <View
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1
            }}
        >
            <ActivityIndicator size='large' />
        </View>
    )
}
