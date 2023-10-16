import React from 'react';
import { gallery1, gallery2, gallery3, gallery4, gallery5 } from '../../../Assets/img';

export default function Gallery() {
    return (
        <section className="mb-0">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div style={{ backgroundImage: `url(${gallery1})` }} className={`h-[300px] bg-center bg-no-repeat bg-cover sticky`}></div>
                <div style={{ backgroundImage: `url(${gallery2})` }} className={`h-[300px] bg-center bg-no-repeat bg-cover sticky`}></div>
                <div style={{ backgroundImage: `url(${gallery3})` }} className={`h-[300px] bg-center bg-no-repeat bg-cover sticky`}></div>
                <div style={{ backgroundImage: `url(${gallery4})` }} className={`h-[300px] bg-center bg-no-repeat bg-cover sticky`}></div>
                <div style={{ backgroundImage: `url(${gallery5})` }} className={`h-[300px] bg-center bg-no-repeat bg-cover sticky`}></div>
            </div>
        </section>
    )
}
