import React from 'react';
import { House1, House2, House3 } from '../../../Assets/img';
import { Card } from '../../../Components';

const PROPERTIES_ARRAY = [
    {
        name: 'House of Light',
        Location: 'Tanke junction',
        formerPrice: null,
        currentPrice: '100,000',
        bedNo: '3',
        bathNo: '2',
        buildingSpace: '500',
        image: House1
    },
    {
        name: 'La Casa de Sapa',
        Location: 'Trenches',
        formerPrice: '80,000',
        currentPrice: '100,000',
        bedNo: '4',
        bathNo: '2',
        buildingSpace: '1500',
        image: House2
    },
    {
        name: 'Ile Ijo',
        Location: 'Sanrab',
        formerPrice: null,
        currentPrice: '60,000',
        bedNo: '3',
        bathNo: '2',
        buildingSpace: '800',
        image: House3
    },
]


export default function Properties() {
    return (
        <section className="space-y-8">
            <div className="text-center mb-10 space-y-4">
                <h1
                    className="text-vestaPurple-1 text-base md:text-lg tracking-[3px] uppercase after:bg-vestaPurple-1 after:inline-block after:h-[1px] after:relative after:align-middle after:w-1/4 before:bg-vestaPurple-1 before:inline-block before:h-[1px] before:relative before:align-middle before:w-1/4">
                    our offers
                </h1>
                <h2
                    className="text-3xl md:text-4xl capitalize mt-2 mb-3">
                    latest properties to let
                </h2>
            </div>
            
            <div className="grid px-2 gap-4 lg:gap-0 grid-cols-1 md:grid-cols-3">
                {PROPERTIES_ARRAY.map((property, index) => <Card key={index} property={property} />)}
            </div>
        </section>
    )
}
