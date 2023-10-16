import React from 'react';

export default function Copyright() {
    const year = new Date().getFullYear();
    return (
        <div className="bg-vestaPurple-2 py-10 text-gray-300 text-center">
            {year} All Rights Reserved. Vesta by <a className="text-white text-sm md:text-base lg:text-lg hover:font-semibold hover:underline hover:underline-offset-1" href="https://portfolio-ajax484.vercel.app/">Y.B. UBAH</a>
        </div>
    )
}
