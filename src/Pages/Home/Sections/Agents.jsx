import React from 'react';
import { Person1, Person2, Person3, Person4 } from '../../../Assets/img';
import { Facebook, Twitter, Google, Instagram } from '../../../Assets/Icons';

const agentsList = [
    {
        name: 'David Olayinka',
        listing: 10,
        image: Person1
    },
    {
        name: 'Karim Abdul',
        listing: 15,
        image: Person2
    },
    {
        name: 'Maria Dehinde',
        listing: 12,
        image: Person3
    },
    {
        name: 'Funke Osikoya',
        listing: 10,
        image: Person4
    },
]

function AgentCard({agent}) {
    const {name, listing, image} = agent;
    return (
        <div className="px-0 lg:px-4 uppercase">
            <div style={{ backgroundImage: `url(${image})` }} className={`h-[200px] md:h-[300px] bg-cover bg-center bg-no-repeat`}></div>

            <div className="bg-vestaPurple-1 text-white py-6 px-4 [box-shadow:0px_3px_4px_rgba(0,0,0,0.20)] space-y-4">
                <div className="space-x-4">
                    <span>Listing</span>
                    <span>{listing} properties</span>
                </div>
                <h3 className="text-xl cursor-pointer hover:text-shadow-xl">{name}</h3>
                <div className="text-white flex space-x-4">
                    <Facebook className="h-10 w-10 bg-vestaPurple-2 p-2 rounded-full cursor-pointer hover:bg-black transition-colors duration-75" />
                    <Twitter className="h-10 w-10 bg-vestaPurple-2 p-2 rounded-full cursor-pointer hover:bg-black transition-colors duration-75" />
                    <Google className="h-10 w-10 bg-vestaPurple-2 p-2 rounded-full cursor-pointer hover:bg-black transition-colors duration-75" />
                    <Instagram className="h-10 w-10 bg-vestaPurple-2 p-2 rounded-full cursor-pointer hover:bg-black transition-colors duration-75" />
                </div>
            </div>
        </div>
    )
}

export default function Agents() {
    return (
        <section className="pt-20 md:pt-40 pb-10 relative">
            <div className="absolute top-0 left-0 w-full md:w-2/3 bg-black [content:''] h-full -z-10"></div>
            <div className="w-full md:w-10/12 mx-auto px-4 lg:px-0">
                <div className="mb-20 space-y-4 w-full md:w-1/2 text-center">
                    <h1 className="text-white text-base md:text-lg tracking-[3px] uppercase after:bg-vestaPurple-1 after:inline-block after:h-[1px] after:relative after:align-middle after:w-1/4 before:bg-vestaPurple-1 before:inline-block before:h-[1px] before:relative before:align-middle before:w-1/4">
                        our agents
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-medium capitalize mt-2 mb-3 text-white">
                        meet our agents
                    </h2>
                </div>

                <div className="grid gap-10 md:gap-5 lg:gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-vestaPurple-1">
                    {
                        agentsList.map((agent, index) => {
                            return (
                                <AgentCard key={index} agent={agent}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
