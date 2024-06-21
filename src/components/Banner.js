import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

const Banner = ({ firstItem, secondItem, buttonText, link}) => {

  const [visible, setIsVisible] = useState(true);

    const closeBanner = () => {
      setIsVisible(!visible);
    };

     return (
      <div>
        {visible && (
          <div className="banner z-50 fixed w-full isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-5 sm:px-3.5 sm:before:flex-1">
            <div
              className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
              aria-hidden="true"
            >
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-5">
              <p className="text-sm leading-6 text-gray-900">
                <strong className="font-semibold">{firstItem}</strong>
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                {secondItem}
                <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <button className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">{buttonText}<span aria-hidden="true"></span></button>
              </p>
            </div>
            <div className="flex flex-1 justify-end">
              <button onClick={closeBanner} type="button" className={`-m-3 p-3 focus-visible:outline-offset-[-4px] ${visible}`}>
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
        {!visible && (
          <div>
          </div>
        )}
      </div>
     )
}

export default Banner
