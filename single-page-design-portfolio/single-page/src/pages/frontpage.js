import Logo from '../assets/logo.svg';
import GraphicDesign from '../assets/pattern-graphic-design.svg'
import React from 'react';
import Button from '../components/blackButton.js'
const FrontPage = () => {
    return ( 
        <main className="h-screen flex flex-col items-center w-full bg-beige overflow-scroll">
            <nav className="w-11/12 pt-4 pr-4 pl-4 flex items-center justify-between">
                <img className="h-12" src={Logo} alt="logo"/>
                <Button />
            </nav>
            <header className="flex flex-col items-center justify-items-center pt-8 ">
                <h1 className="text-black text-center text-4xl font-jakartaL">Design solutions made easy</h1>
                <p className="text-grey text-center text-base font-jakartaM w-8/12 pt-4">With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.</p>
            </header>
            <div className="pt-5 grid grid-rows-5 grid-cols-2 w-11/12">
                <div className="bg-blue rounded-lg col-start-1 col-end-3 row-start-1 row-end-2 grid grid-rows-2 grid-cols-2">
                    <img className="h-48 pt-6 pl-6 col-start-2 col-end-3" src={GraphicDesign} alt="graphic design"/>
                    <p className="text-white text-center text-2xl font-jakartaL col-start-1 col-end-3 row-start-2 row-end-3 flex items-end justify-start pb-5 pl-5">Graphic Design</p>
                </div>
            </div>
        
        </main>
    )
}

export default FrontPage;