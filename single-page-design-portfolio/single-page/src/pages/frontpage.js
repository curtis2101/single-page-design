import Logo from '../assets/logo.svg';
import React from 'react';
import Button from '../components/blackButton.js'
const FrontPage = () => {
    return ( 
        <main className="h-screen flex flex-col items-center w-full bg-beige">
            <nav className="w-11/12 pt-5 pr-1 pl-1 flex items-center justify-between">
                <img className="h-12" src={Logo} alt="logo"/>
                <Button />
                
            </nav>

        
        </main>
    )
}

export default FrontPage;