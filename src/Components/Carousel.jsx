import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

function CarouselItem({ slide }) {
    return (
        <div className={`bg-white w-[calc(100%-8px)] sm:w-[calc(50%-8px)] lg:w-[calc(33%-8px)] m-[4px] border-[1px] border-gray-200 p-4 flex-col shadow-md inline-flex space-y-4`}>
            <p className="text-sm md:text-base text-gray-500 leading-6 md:leading-8 whitespace-normal">
                {slide.text}
            </p>
            <div className="flex flex-row space-x-8">
                <div className="w-20">
                    <img
                        height={80}
                        width={80}
                        src={slide.image}
                        alt="This is a carousel slide"
                        className="w-full h-auto rounded-full border-2 border-vestaPurple-1"
                    />
                </div>
                <div className=" text-black flex flex-col justify-around capitalize">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium">{slide.name}</h3>
                    <h4 className="text-gray-500 text-base md:text-lg">{slide.position}</h4>
                </div>
            </div>
        </div>
    )
}

export default function Carousel({ carouselData }) {
    const setDotsNo = () => window.innerWidth >= 768 ? carouselData.length - 3 : window.innerWidth >= 640 && window.innerWidth < 768 ? carouselData.length - 2 : carouselData.length - 1;

    const setSlideWidth = () => window.innerWidth >= 768 ? 33 : window.innerWidth >= 640 && window.innerWidth < 768 ? 50 : 100;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [paused, setPaused] = useState(false);
    const [len, setLen] = useState(setDotsNo());
    const [slideX, setSlideX] = useState(setSlideWidth())

    const dots = [];

    window.addEventListener('resize', () => {
        setLen(setDotsNo());
        setSlideX(setSlideWidth());
        setCurrentSlide(0);
    })

    useEffect(() => {
        const carouselInt = setInterval(() => {
            if (paused === false) {
                setCurrentSlide(prevSlide => prevSlide === len ? 0 : prevSlide + 1);
            }
        }, 3000);

        return () => {
            clearInterval(carouselInt);
        }

    }, [carouselData.length, paused, len])

    const nextSlide = () => setCurrentSlide(prevSlide => prevSlide === len ? 0 : prevSlide + 1);


    const prevSlide = () => setCurrentSlide(prevSlide => prevSlide === 0 ? len : prevSlide - 1);

    const handlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => prevSlide()
    })


    for (let i = 0; i <= len; i++) {
        dots.push(
            <div
                className={`h-2.5 w-2.5 rounded-full mx-2 mb-2 cursor-pointer ${i === currentSlide ? 'bg-vestaPurple-1' : 'bg-gray-300'}`}
                key={i}
                onClick={() => {
                    setCurrentSlide(i);
                }}
            ></div>
        );
    }

    return (
        <div
            className="relative px-1"
            onMouseEnter={() => {
                setPaused(true);
            }}
            onMouseLeave={() => {
                setPaused(false);
            }}
        >

            <div className="flex flex-col space-y-4">
                <div className="overflow-hidden max-w-full mx-auto">
                    <div
                        {...handlers}
                        className="whitespace-nowrap transition-transform duration-300 w-full"
                        style={{ transform: `translateX(-${currentSlide * slideX}%)` }}
                    >
                        {carouselData.map((slide, index) => {
                            return (
                                <CarouselItem slide={slide} key={index} />
                            );
                        })}
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    {dots}
                </div>
            </div>
        </div>
    );
}

