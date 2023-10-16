import React from 'react';
import { Hero, Services, Properties, Details, PeopleFirst, Testimonial, Agents, Blog, Gallery } from './Sections';


export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Properties />
            <Details />
            <PeopleFirst />
            <Testimonial />
            <Agents />
            <Blog />
            <Gallery />
        </main>
    )
}
