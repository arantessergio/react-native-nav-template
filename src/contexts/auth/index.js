import React, { createContext, useContext, useEffect, useState } from 'react'
import { isAuth } from '../../services/auth'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    useEffect(() => {
        const validate = async () => {
            const result = await isAuth()

            setToken(result === 'true')
        }

        validate()
    }, [])

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
