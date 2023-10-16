import React from 'react';
import { Girl } from '../../../Assets/img';

export default function PeopleFirst() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <div className="col-span-1">
        <img src={Girl} alt="" className="object-fit h-auto" />
      </div>

      <div className="col-span-1 bg-white h-fit my-auto py-4 lg:py-14 px-2 sm:px-4 md:px-8 lg:static lg:-ml-32 space-y-2 [box-shadow:-20px_0px_10px_0px_rgb(0_0_0_/_13%)]">

        <div className="text-center mb-10 space-y-4">
          <h1 className="text-vestaPurple-1 text-sm sm:text-base md:text-lg tracking-[3px] uppercase after:bg-vestaPurple-1 after:inline-block after:h-[1px] after:relative after:align-middle after:w-1/4 before:bg-vestaPurple-1 before:inline-block before:h-[1px] before:relative before:align-middle before:w-1/4">
            customer First
          </h1>
          <h2 className="text-3xl md:text-4xl font-medium capitalize mt-2 mb-3">
            We put people first
          </h2>
        </div>

        <div className="text-gray-500 lg:space-y-4 text-sm md:text-base">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste cum commodi ea et
            assumenda iusto voluptas dolores accusamus repellendus ex delectus qui reiciendis
            temporibus, beatae tempore necessitatibus eos quia ducimus?
          </p>

          <p>
            On her way she met a copy. The copy warned the Little Blind Text, that where it came
            from it would have been rewritten a thousand times and everything that was left from
            its origin would be the word "and" and the Little Blind Text should turn around and
            return to its own, safe country. But nothing the copy said could convince her and so
            it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they abused her for
            their.
          </p>

        </div>

      </div>

    </section>
  )
}
