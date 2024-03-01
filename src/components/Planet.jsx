import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './../assets/data.json'
// import './../assets/img/destination'


const Planet = () => {

    const { id } = useParams();
    console.log(id);
    const planets = Data.destinations[id]

    return (
        <div className='h-full w-full flex items-end pb-[150px]'>
            <div className='w-1/2 flex justify-start'>
            <img className='animate-[spin_300s_linear_infinite] size-[450px]' src={new URL(`../assets/img/destination/${planets.images.png}`, import.meta.url).href} alt=""  />
            </div>
            <div className='w-1/2 h-full'>
                <p className='text-[150px] leading-tight'>{Data.destinations[id].name}</p>
                <p className='w-[85%] font-thin tracking-widest'>{Data.destinations[id].description}</p>
                <div className='h-[0.5px] bg-white mt-8 mb-8'></div>
                <p className='font-thin'>Est. Travel Time</p>
                <p className='text-[30px]'>{Data.destinations[id].travel}</p>
            </div>
        </div>
    );
}

export default Planet;
