import React from 'react'


const ComponentLoader = () => {
    return (
        <div className='absolute bg-white z-40 w-full min-h-full   opacity-80 top-0 left-0'>
            <div className="ring">Loading
                <span className='spin-loading'></span>
            </div>
        </div>
    )
}

export default ComponentLoader
