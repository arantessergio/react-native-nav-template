import AsyncStorage from '@react-native-community/async-storage'

export const signup = () => AsyncStorage.setItem('logged', 'true')

export const signin = () => AsyncStorage.setItem('logged', 'true')

export const signout = () => AsyncStorage.setItem('logged', 'false')

export const isAuth = () => AsyncStorage.getItem('logged')
