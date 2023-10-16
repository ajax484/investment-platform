import React from 'react';

export default function Details() {
  return (
    <section className="overflow-hidden grid grid-cols-2 mx-auto w-full md:w-11/12 [background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/src/Assets/img/interior.webp')] md:bg-interior bg-cover bg-center bg-no-repeat">
      <div className="col-span-2 md:col-span-1 h-full bg-transparent md:bg-black px-3 py-8">
        <div className="text-center mb-10">
          <h1
            className="text-white text-lg md:text-xl tracking-[3px] uppercase after:bg-vestaPurple-1 after:inline-block after:h-[1px] after:relative after:align-middle after:w-1/4 before:bg-vestaPurple-1 before:inline-block before:h-[1px] before:relative before:align-middle before:w-1/4">
            Work Flow
          </h1>
          <h2
            className="text-3xl md:text-4xl text-white capitalize mt-2 mb-3">
            How it works
          </h2>
        </div>
        <div className="grid grid-cols-2 text-white gap-6">
          <div className="space-y-4 flex items-center flex-col">
            <span className="text-2xl md:text-4xl bg-vestaPurple-2 rounded-full px-4 py-3 md:p-6 flex items-center justify-center">
              01
            </span>
            <h3 className="capitalize text-xl md:text-2xl text-center">
              evaluate property
            </h3>
            <p className="text-slate-300 text-sm md:text-base text-center leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic pariatur
            </p>
          </div>

          <div className="space-y-4 flex items-center flex-col">
            <span className="text-2xl md:text-4xl bg-vestaPurple-2 rounded-full px-4 py-3 md:p-6 flex items-center justify-center">
              02
            </span>
            <h3 className="capitalize text-xl md:text-2xl text-center">
              meet your agent
            </h3>
            <p className="text-slate-300 text-sm md:text-base text-center leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic pariatur
            </p>
          </div>

          <div className="space-y-4 flex items-center flex-col">
            <span className="text-2xl md:text-4xl bg-vestaPurple-2 rounded-full px-4 py-3 md:p-6 flex items-center justify-center">
              03
            </span>
            <h3 className="capitalize text-xl md:text-2xl text-center">
              close the deal 
            </h3>
            <p className="text-slate-300 text-sm md:text-base text-center leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic pariatur
            </p>
          </div>

          <div className="space-y-4 flex items-center flex-col">
            <span className="text-2xl md:text-4xl bg-vestaPurple-2 rounded-full px-4 py-3 md:p-6 flex items-center justify-center">
              04
            </span>
            <h3 className="capitalize text-xl md:text-2xl text-center">
              have your property
            </h3>
            <p className="text-slate-300 text-sm md:text-base text-center leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic pariatur
            </p>
          </div>
        </div>
      </div>
    </section >
  )
}
