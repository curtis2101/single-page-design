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
        <section className='w-4/5 flex flex-col justify-center items-center'>
            {ImageData.map((slide, index) => {
                return (
                <div className={index === current ? 'opacity-100 duration-1000 transform' : 'opacity-0 duration-1000'} key={index}>
                    {index === current && (
                    <img src={slide.image} alt='multiple images' className='mt-16 h-44 w-96 rounded-xl' />
                    )}
                </div>
            );
        })}
                <div className="mt-8 flex ">
                    <img className='p-6 mr-2 top-2/4 bg-black cursor-pointer select-none rounded-full h-16 w-16' src={LeftBtn} onClick={prevSlide} alt="left arrow" />
                    <img className='p-6 ml-2 top-2/4 bg-black cursor-pointer select-none rounded-full h-16 w-16' src={RightBtn} onClick={nextSlide} alt="right arrow" />
                </div>
        </section>
    );
}

export default Carousel
