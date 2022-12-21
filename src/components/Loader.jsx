import React from 'react'


const Loader = () => {
    return (
        <div className='fixed bg-white z-40 w-full min-h-screen  opacity-80'>
            <div className="ring">Loading
                <span className='spin-loading'></span>
            </div>
        </div>
    )
}

export default Loader
