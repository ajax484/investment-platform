import React from 'react';
import { Bed, Bath, Building } from '../Assets/Icons';

export default function Card({ property }) {
    const { name, Location, formerPrice, currentPrice, bedNo, bathNo, buildingSpace, image } = property;
    
    return (
        <div className="rounded-[5px] px-0 lg:px-4">
            <div style={{ backgroundImage: `url(${image})` }} className={`h-[250px] bg-center bg-no-repeat bg-cover`}></div>

            <div className="bg-vestaPurple-1 text-white -mt-12 relative z-10 py-6 ml-2 mr-4 pl-4 lg:pl-8 pr-2 [box-shadow:0px_3px_4px_rgba(0,0,0,0.20)] space-y-4">
                <div className="text-sm lg:text-base space-x-8">

                    {formerPrice &&
                        <span className="text-slate-300">
                            <em>
                                <del><span className="naira">₦</span>{formerPrice}</del>
                            </em>
                        </span>
                    }

                    <span className="new_price">
                        <span className="naira">₦</span>{currentPrice}<span className="text-slate-300">/mo</span>
                    </span>

                </div>
                <ul className="space-x-4 lg:space-x-8 flex flex-row text-slate-300 text-xs lg:text-sm">
                    <li className="flex items-center space-x-2">
                        <Bed className="h-6 inline-block" />
                        <span>{bedNo}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Bath className="h-4 inline-block" />
                        <span>{bathNo}</span>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Building className="h-4 inline-block" />
                        <span>{buildingSpace}sqft</span>
                    </li>
                </ul>
                <div className="space-y-2">
                    <h3 className="text-lg lg:text-xl">{name}</h3>
                    <h4 className="text-slate-300 text-base lg:text-lg">{Location}</h4>
                </div>
            </div>
        </div>
    )
}
