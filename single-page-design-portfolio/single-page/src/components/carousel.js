import React,{useState} from 'react'
import ImageData from './imageData.js'
import LeftBtn from '../assets/icon-arrow-left.svg'
import RightBtn from '../assets/icon-arrow-right.svg'


const Carousel = ({slides}) => {
    const [current,setCurrent] = useState(0);
    const length = slides.length
    

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

        return (    
            <>
        <section className='flex justify-center items-center'>
            {ImageData.map((slide, index) => {
                return (
                    <div className={index === current ? 'opacity-100 duration-200 transform flex justify-center items-center' : 'opacity-0 duration-200 flex justify-center items-center'} key={index}>
                        {index === current && (<>
                        <img src={ImageData[current <= 1 ? length - 2 : current -1].image} alt='multiple images' className='mt-16 mr-6 h-44 w-64 md:h-80 md:w-full rounded-xl' />
                        <img src={slide.image} alt='multiple images' className='mt-16 h-44 w-64 md:h-80 md:w-full rounded-xl' />
                        <img src={ImageData[current >= length -1 ? 0:current +1].image} alt='multiple images' className='mt-16 ml-6 h-44 w-64 md:h-80 md:w-full rounded-xl' />
                        </>
                        )}
                    </div>
    );
})}
        </section>
        <div className="mt-8 flex ">
            <img className='p-6 mr-2 top-2/4 bg-black cursor-pointer select-none rounded-full h-16 w-16 lg:hover:bg-blue' src={LeftBtn} onClick={prevSlide} alt="left arrow" />
            <img className='p-6 ml-2 top-2/4 bg-black cursor-pointer select-none rounded-full h-16 w-16 lg:hover:bg-blue' src={RightBtn} onClick={nextSlide} alt="right arrow" />
        </div>
        </>
        
);
}

export default Carousel
