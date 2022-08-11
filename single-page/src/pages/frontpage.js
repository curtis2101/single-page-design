import Logo from '../assets/logo.svg';
import GraphicDesign from '../assets/pattern-graphic-design.svg'
import UI from '../assets/pattern-ui-ux.svg'
import Apps from '../assets/pattern-apps.svg'
import Illustrations from '../assets/pattern-illustrations.svg'   
import Photography from '../assets/pattern-photography.svg'
import Motion from '../assets/pattern-motion-graphics.svg'
import Amy from '../assets/image-amy.webp'
import React from 'react';
import BlackButton from '../components/blackButton.js'
import RedButton from '../components/redButton.js'
import Carousel from '../components/carousel.js'
import ImageData from '../components/imageData.js'
import RedButtonBtm from '../components/redButtonTabletBottom.js'

const FrontPage = () => {
    return ( 
        <main className="h-screen flex flex-col items-center w-full bg-beige overflow-scroll">
            <nav className="w-11/12 pt-4 md:pt-8 pr-4 pl-4 flex items-center justify-between">
                <img className="h-12 md:h-16 lg:ml-28" src={Logo} alt="logo"/>
                <BlackButton />
            </nav>
            <header className="flex flex-col items-center justify-items-center pt-8 md:pt-16 ">
                <h1 className="text-black text-center text-4xl md:text-5xl font-bold font-jakartaL">Design solutions made easy</h1>
                <p className="text-grey text-center text-base font-medium font-jakartaM w-9/12 pt-4 md:text-lg md:mt-7 lg:mt-6 ">With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.</p>
            </header>
            <div className="mt-6 md:mt-16 md:w-full grid content-center md:justify-items-start justify-items-center auto-rows-min auto-cols"> {/*main grid div*/}
                <div className=" bg-blue w-11/12 md:w-10/12 lg:w-96 mb-6 max-h-96 rounded-lg row-start-1 row-end-2 lg:ml-32 lg:mr-6 lg:row-end-3 col-start-1 col-end-3 md:ml-10 md:col-end-2 grid grid-rows-2 grid-cols-2">
                    <img className="h-48 pt-6 pl-6 lg:pl-16 col-start-2 col-end-3" src={GraphicDesign} alt="graphic design"/>
                    <p className="text-white text-center text-2xl font-bold font-jakartaL col-start-1 col-end-3 row-start-2 row-end-3 flex items-end justify-start pb-5 pl-5">Graphic Design</p>
                </div>
                    <div className="h-44 rounded-lg col-start-1 col-end-2 row-start-2 row-end-2 md:m-0 md:w-44 md:h-48 md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 lg:col-end-2 lg:row-start-1 lg:row-end-1 lg:h-52 mr-3 ml-4 bg-orange grid grid-rows-2 grid-cols-2">
                        <img className="pl-2 pt-6 h-20 row-start-1 row-end-1 col-start-2 col-end-3" src={UI} alt="UI/UX"/>
                        <p className="text-white text-2xl font-bold font-jakartaL col-start-1 col-end-2 row-start-2 row-end-2 flex items-end pl-6 pb-6">UI/UX</p>
                    </div>
                    <div className="h-44 rounded-lg col-start-2 col-end-3 row-start-2 row-end-2 md:m-0 md:h-48 md:w-44 md:mr-4 md:row-start-1 md:row-end-2 md:col-start-3 md:col-end-4 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-1 lg:h-52 lg:ml-52 ml-3 mr-4 bg-pink grid grid-rows-2 grid-cols-2">
                        <img className="pl-2 pt-6 h-20 row-start-1 row-end-1 col-start-2 col-end-3" src={Apps} alt="UI/UX"/>
                        <p className="text-white text-2xl font-bold font-jakartaL col-start-1 col-end-2 row-start-2 row-end-2 flex items-end pl-6 pb-6">Apps</p>
                    </div>
                    <div className="h-40 w-11/12 mt-48 rounded-lg col-start-1 col-end-3 row-start-2 row-end-2 md:w-11/12 md:mt-56 md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2 lg:-mt-1 lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:h-40 lg:row-end-3 lg:w-96 bg-red grid grid-rows-2 grid-cols-2">
                        <img className="col-start-2 col-end-3 row-start-1 row-end-1 lg:pl-10 pl-4 pt-6" src={Illustrations} alt="graphics" />
                        <p className="pl-6 pt-6 col-start-1 col-end-2 row-start-2 row-end-3 text-white text-2xl font-bold font-jakartaL">Illustrations</p>
                    </div>
                    <div className="h-52 w-11/12 mt-6 rounded-lg col-start-1 col-end-3 row-start-3 row-end-3 md:col-start-1 md:h-44 md:ml-10 md:w-10/12 md:col-end-2 md:row-start-2 md:row-end-2 md:mt-0 lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:ml-2 lg:mr-44 lg:h-52 lg:w-96 bg-green grid grid-rows-2 grid-cols-2">
                        <img className=" col-start-1 col-end-3 row-start-1 row-end-1 lg:pl-48 pl-40 pt-6" src={Photography} alt="graphics" />
                        <p className="pl-6 pt-12 md:pt-10 col-start-1 col-end-2 row-start-2 row-end-3 text-white text-2xl font-jakartaL font-bold">Photography</p>
                    </div>
                    <div className="h-48 w-11/12 mt-64 rounded-lg col-start-1 col-end-3 row-start-3 row-end-4 md:col-start-2 md:mt-0 md:h-44 md:w-11/12 md:col-end-4 md:row-start-2 md:row-end-2 lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:h-40 lg:ml-2 lg:-mt-1 lg:w-96 bg-purple grid grid-rows-2 grid-cols-2">
                        <img className="col-start-2 col-end-3 row-start-1 row-end-1 lg:pl-10 pl-4 pt-6" src={Motion} alt="graphics" />
                        <p className="pl-6 pt-9 col-start-1 col-end-3 row-start-2 row-end-3 text-white text-2xl font-jakartaL font-bold">Motion Graphics</p>
                    </div>
                </div>
                <div className="mt-24 flex flex-col items-center md:relative md:flex-row">
                    <img className="h-72 w-72 md:absolute md:-left-10 md:h-96 md:w-96 lg:left-40" src={Amy} alt="amy" />
                    <div className="flex items-center flex-col">
                        <h2 className="pt-10 w-10/12 md:w-5/12 md:text-left md:text-3xl md:relative md:-top-6 md:-right-48 text-2xl font-jakartaL font-bold text-center lg:left-72">I'm Amy, and I'd love to work on your next project</h2>
                        <p className="pb-6 font-jakartaM font-medium text-grey md:text-lg md:relative md:-top-6 md:-right-48 md:text-left md:w-5/12 lg:left-72 text-base text-center pt-6 lg:pt-8 w-11/12">I Love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!</p>
                        <RedButton/>
                    </div>
                </div>
                <h2 className="mt-24 font-jakartaL font-bold text-center text-2xl md:text-4xl">My Work</h2>
                <Carousel slides={ImageData}/>
                <div className="mt-24 flex flex-col lg:flex-row bg-black items-center justify-items-center w-11/12 rounded-xl lg:w-9/12">
                    <div className="flex flex-col items-center lg:items-start justify-items-center">
                        <h2 className="mt-12 font-jakartaL font-bold text-center text-2xl md:text-3xl lg:mt-20 lg:text-left lg:ml-16 lg:text-4xl text-beige">Book a call with me</h2>
                        <p className="mt-6 mb-6 font-jakartaM font-medium text-center text-base md:text-lg lg:pb-20 lg:ml-16 lg:text-left lg:w-8/12 text-beige w-5/6 md:w-9/12">I'd love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>
                    </div>
                    <RedButtonBtm />
                    <div className="h-12">
                    </div>
                </div>
                <footer className="mt-10 mb-8 w-11/12 flex items-center justify-between">
                    <img className="h-12 md:h-16 lg:ml-28" src={Logo} alt="logo"/>
                    <BlackButton />
                </footer>
        
        </main>
    )
}

export default FrontPage;