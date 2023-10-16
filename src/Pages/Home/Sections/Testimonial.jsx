import React from 'react';
import { Person1, Person2, Person3, Person4 } from '../../../Assets/img';
import { Carousel } from '../../../Components';

const carouselData = [
    {
        name: 'Adamu Adamu',
        position: 'Marketing Manager',
        image: Person1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati laudantium odio non fuga id illum rem velit delectus",

    },
    {
        name: 'Otebo Peterside',
        position: 'Marketing Manager',
        image: Person2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati laudantium odio non fuga id illum rem velit delectus",
    },
    {
        name: 'Ogundipo Funke',
        position: 'Marketing Manager',
        image: Person3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati laudantium odio non fuga id illum rem velit delectus",
    },
    {
        name: 'Damini Rachael',
        position: 'Marketing Manager',
        image: Person4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati laudantium odio non fuga id illum rem velit delectus",
    },

]

export default function Testimonial() {

    return (
        <section className="max-w-full py-6">
            <div className="text-center mb-10 space-y-4">
                <h1 className="text-vestaPurple-1 text-base md:text-lg tracking-[3px] uppercase after:bg-vestaPurple-1 after:inline-block after:h-[1px] after:relative after:align-middle after:w-1/4 before:bg-vestaPurple-1 before:inline-block before:h-[1px] before:relative before:align-middle before:w-1/4">
                    testimonials
                </h1>
                <h2 className="text-3xl md:text-4xl font-medium capitalize mt-2 mb-3">
                    satisfied customers
                </h2>
            </div>

            <Carousel carouselData={carouselData} />
        </section>

    )
}

