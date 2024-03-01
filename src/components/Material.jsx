import React from 'react';
import Data from './../assets/data.json'
import { useParams } from 'react-router-dom';

const Material = () => {
    const { id } = useParams();
    const Material = Data.technology[id]

    return (
        <div className=' flex items-end'>
            <div className='w-full h-full flex flex-col justify-center gap-5'>
                <p className='text-[60px] tracking-wide'>{Material.name}</p>
                <p className='w-[80%] font-thin tracking-widest h-[100px] text-[16px] mb-[60px]'>{Material.description}</p>
            </div>
            <div className='absolute bottom-0 right-0 w-1/2 flex justify-end items-center h-[80%] mr-[250px]'>
                <img className=' w-[500px]' src={new URL(`../assets/img/technology/${Material.images.portrait}`, import.meta.url).href} alt=""  />
            </div>
        </div>
    );
}
export default Material;