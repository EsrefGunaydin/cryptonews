import React from 'react'
import { device } from "../../utils/screenSizes"
import { Link } from "react-router-dom"
import './mainNav.css'

const MainNav = () => {
    
    return (
        <div className="topnav">
            <div style={{margin: "0 auto"}}>
                <Link className="link active" to="/">Home</Link> 
                <Link className="link" to="/news">Crypto News</Link>
                <Link className="link" to="/trending">Trending Cryptos</Link>
                <Link className="link" to="/market">Crypto Market Data</Link>
                <Link className="link" to="/yourcryptos">Track Your Cryptos</Link>
                <Link className="link" to="/about">About Us</Link>
                <Link className="link" to="/contact">Contact Us</Link>
            </div>
        </div>
    )
}



export default MainNav

