import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './../assets/data.json'


const Member = () => {
    const { id } = useParams();
    const Member = Data.crew[id]

    return (
        <div className=' w-full flex items-end '>
            <div className='w-1/2 h-full flex flex-col justify-center gap-5'>
                <p className='text-[25px] leading-none font-light tracking-widest'>{Member.role}</p>
                <p className='text-[60px] tracking-wide'>{Member.name}</p>
                <p className='font-thin tracking-widest w-[80%] h-[100px] text-[16px] mb-[60px]'>{Member.bio}</p>
            </div>
            <div className=' absolute bottom-0 right-0 w-1/2 flex justify-end items-center h-[80%] mr-[250px]'>
                <img className=' absolute bottom-0 w-[450px]' src={new URL(`../assets/img/crew/${Member.images.png}`, import.meta.url).href} alt=""  />
            </div>
        </div>
    );
}

export default Member;