import React from 'react'
import LoginForm from '../components/LoginForm'
import MainNav from '../components/navigation/MainNav'

const YourCryptos = () => {
    return (
        <div>
            <MainNav />
            Your have to register or login first to track your cryptos
            <LoginForm />
        </div>
    )
}

export default YourCryptos
