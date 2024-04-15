import React from 'react';
import './Card.css';

const Suspendise = () => {
    return (
        <div className='suspendisecontain'>
            <div className='leftsuspendisecontain'>
                <div className='leftdescription'>
                    <h1 className='text-[30px]'>Any Day Offers</h1>
                    <p>Suspendise Faucibus Sed</p>
                    <span className='text-[20px]'>Shop Now</span>
                </div>
                <div className='leftover'></div>
            </div>
            <div className='rightsuspendisecontain'>
                <div className='leftdescription'>
                    <h1 className='text-[30px]'>Other Flavors</h1>
                    <p>Suspendise Faucibus Sed</p>
                    <span className='text-[20px]'>Shop Now</span>
                </div>
                <div className='rightover'></div>
            </div>
        </div>
    );
}

export default Suspendise;