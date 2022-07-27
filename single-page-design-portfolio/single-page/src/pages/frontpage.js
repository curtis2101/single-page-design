import Logo from '../assets/logo.svg';
import GraphicDesign from '../assets/pattern-graphic-design.svg'
import UI from '../assets/pattern-ui-ux.svg'
import Apps from '../assets/pattern-apps.svg'
import Illustrations from '../assets/pattern-illustrations.svg'   
import Photography from '../assets/pattern-photography.svg'
import Motion from '../assets/pattern-motion-graphics.svg'
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
            <div className="grid items-end grid-rows-5 grid-cols-2 w-11/12">
                <div className="mb-2  bg-blue h-5/6 rounded-lg col-start-1 col-end-3 row-start-1 row-end-2 grid grid-rows-2 grid-cols-2">
                    <img className="h-48 pt-6 pl-6 col-start-2 col-end-3" src={GraphicDesign} alt="graphic design"/>
                    <p className="text-white text-center text-2xl font-jakartaL col-start-1 col-end-3 row-start-2 row-end-3 flex items-end justify-start pb-5 pl-5">Graphic Design</p>
                </div>
                <div className="col-start-1 col-end-3 row-start-2 row-end-2 grid grid-rows-2 grid-cols-2 ">
                    <div className="h-44 mt-6 rounded-lg col-start-1 col-end-2 row-start-1 row-end-1 mr-3 bg-orange grid grid-rows-2 grid-cols-2">
                        <img className="pl-2 pt-6 h-20 row-start-1 row-end-1 col-start-2 col-end-3" src={UI} alt="UI/UX"/>
                        <p className="text-white text-2xl font-jakartaL col-start-1 col-end-2 row-start-2 row-end-2 flex items-end pl-6 pb-6">UI/UX</p>
                    </div>
                    <div className="h-44 mt-6 rounded-lg col-start-2 col-end-3 row-start-1 row-end-2 ml-3 bg-pink grid grid-rows-2 grid-cols-2">
                        <img className="pl-2 pt-6 h-20 row-start-1 row-end-1 col-start-2 col-end-3" src={Apps} alt="UI/UX"/>
                        <p className="text-white text-2xl font-jakartaL col-start-1 col-end-2 row-start-2 row-end-2 flex items-end pl-6 pb-6">Apps</p>
                    </div>
                    <div className="h-40 mt-6 rounded-lg col-start-1 col-end-3 row-start-2 row-end-2 bg-red grid grid-rows-2 grid-cols-2">
                        <img className="col-start-2 col-end-3 row-start-1 row-end-1 pl-4 pt-6" src={Illustrations} alt="graphics" />
                        <p className="pl-6 pt-6 col-start-1 col-end-2 row-start-2 row-end-3 text-white text-2xl font-jakartaL">Illustrations</p>
                    </div>
                    <div className="h-52 mt-2 rounded-lg col-start-1 col-end-3 row-start-3 row-end-4 bg-green grid grid-rows-2 grid-cols-2">
                        <img className=" col-start-1 col-end-3 row-start-1 row-end-1 pl-40 pt-6" src={Photography} alt="graphics" />
                        <p className="pl-6 pt-12 col-start-1 col-end-2 row-start-2 row-end-3 text-white text-2xl font-jakartaL">Photography</p>
                    </div>
                    <div className="h-48 mt-6 rounded-lg col-start-1 col-end-3 row-start-4 row-end-5 bg-purple grid grid-rows-2 grid-cols-2">
                        <img className="col-start-2 col-end-3 row-start-1 row-end-1 pl-4 pt-6" src={Motion} alt="graphics" />
                        <p className="pl-6 pt-6 col-start-1 col-end-3 row-start-2 row-end-3 text-white text-2xl font-jakartaL">Motion Graphics</p>
                    </div>
                </div>
            </div>
        
        </main>
    )
}

export default FrontPage;