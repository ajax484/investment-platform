import React from 'react';
import { Facebook, Twitter, Instagram, CaretRight, MapMarked, Phone, PaperPlane } from '../Assets/Icons';
import Copyright from './Copyright';

export default function Footer() {
    return (
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-5 md:px-10 py-14 lg:py-28  bg-vestaPurple-1 text-white">
                <div className="space-y-10">
                    <div>
                        <h1 className="capitalize text-4xl font-semibold leading-none">Vesta</h1>
                        <h2 className="uppercase leading-none">Real Estate</h2>
                    </div>
                    <p className="text-gray-300 leading-loose">
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </p>
                    <div className="text-white flex space-x-4">
                        <Facebook className="h-10 w-10 bg-vestaPurple-2 p-2 rounded-full cursor-pointer hover:bg-black transition-colors duration-75" />
                        <Twitter className="h-10 w-10 bg-vestaPurple-2 p-2 rounded-full cursor-pointer hover:bg-black transition-colors duration-75" />
                        <Instagram className="h-10 w-10 bg-vestaPurple-2 p-2 rounded-full cursor-pointer hover:bg-black transition-colors duration-75" />
                    </div>
                </div>

                <div className="space-y-10">
                    <h3 className="capitalize text-xl md:text-2xl font-semibold">Offers</h3>
                    <ul className="space-y-4 md:text-lg text-gray-300">
                        <li className="block space-x-4  hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">properties</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">Agents</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">Locations</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">Clients Support</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-10">
                    <h3 className="capitalize text-xl md:text-2xl font-semibold">company</h3>
                    <ul className="space-y-4 md:text-lg text-gray-300">
                        <li className="block space-x-4  hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">home</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">about</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">blog</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">contact us</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-10">
                    <h3 className="capitalize text-xl md:text-2xl font-semibold">quick links</h3>
                    <ul className="space-y-4 md:text-lg text-gray-300">
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">terms & conditions</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">user guide</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">support center</span>
                        </li>
                        <li className="block space-x-4 hover:text-white cursor-pointer">
                            <CaretRight className="h-6 md:h-8 inline-block font-bold" />
                            <span className="capitalize">press info</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-10">
                    <h3 className="capitalize text-xl md:text-2xl font-semibold">Have a question?</h3>
                    <div className="space-x-4 flex">
                        <MapMarked className="h-8 inline-block font-bold text-gray-300" />
                        <span>15 Broadway street, Marina, Lagos State, Nigeria</span>
                    </div>

                    <div className="space-x-4 flex">
                        <Phone className="h-6 inline-block font-bold text-gray-300" />
                        <span>+234 900 521 8529</span>
                    </div>

                    <div className="space-x-4 flex">
                        <PaperPlane className="h-6 inline-block font-bold text-gray-300" />
                        <span>vesta@gmail.com</span>
                    </div>
                </div>
            </div>

            <Copyright />
        </footer>
    )
}
