import React from 'react';
import { CheckDouble, People, Spy, Padlock } from '../../../Assets/Icons';

export default function Services() {
  return (
    <section>
      <div className="text-center mb-10 space-y-4">
        <h1 className="text-vestaPurple-1 text-base md:text-lg tracking-[3px] uppercase after:bg-vestaPurple-1 after:inline-block after:h-[1px] after:relative after:align-middle after:w-1/4 before:bg-vestaPurple-1 before:inline-block before:h-[1px] before:relative before:align-middle before:w-1/4">Our Services</h1>
        <h2 className="text-3xl md:text-4xl font-medium capitalize mt-2 mb-3">Best way to get a home</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-3">
        <div className="flex flex-col space-y-3 p-4 items-center">
          <div className="p-2 md:p-4 bg-vestaPurple-1 rounded-full w-fit hover:rotate-[360deg] ease-linear duration-500">
            <CheckDouble className="h-14 md:h-16 m-0 text-white" />
          </div>
          <h3 className="text-center text-xl md:text-2xl font-medium">Trustworthy</h3>
          <p className="text-center text-sm md:text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic pariatur</p>
        </div>
        <div className="flex flex-col space-y-3 p-4 items-center">
          <div className="p-2 md:p-4 bg-vestaPurple-1 rounded-full w-fit hover:rotate-[360deg] ease-linear duration-500">
            <People className="h-14 md:h-16 m-0 text-white" />
          </div>
          <h3 className="text-center text-xl md:text-2xl font-medium">Community</h3>
          <p className="text-center text-sm md:text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic pariatur</p>
        </div>
        <div className="flex flex-col space-y-3 p-4 items-center">
          <div className="p-2 md:p-4 bg-vestaPurple-1 rounded-full w-fit hover:rotate-[360deg] ease-linear duration-500">
            <Spy className="h-14 md:h-16 m-0 text-white" />
          </div>
          <h3 className="text-center text-xl md:text-2xl font-medium">No Middlemen</h3>
          <p className="text-center text-sm md:text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic pariatur</p>
        </div>
        <div className="flex flex-col space-y-3 p-4 items-center">
          <div className="p-2 md:p-4 bg-vestaPurple-1 rounded-full w-fit hover:rotate-[360deg] ease-linear duration-500">
            <Padlock className="h-14 md:h-16 m-0 text-white" />
          </div>
          <h3 className="text-center text-xl md:text-2xl font-medium">Locked In Pricing</h3>
          <p className="text-center text-sm md:text-base text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic pariatur</p>
        </div>
      </div>
    </section>
  )
}
