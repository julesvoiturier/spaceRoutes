import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Material from './Material';
import Data from './../assets/data.json'
import { useState } from 'react';

const Technology = () => {

    const [activeKey, setActiveKey] = useState(0);
    return (
        <div className='h-full w-full flex justify-center'>
            <div className='absolute -z-10 h-full w-full bg-cover bg-center bg-[url(./assets/img/technology/background-technology-desktop.jpg)] bg-multiply'></div>
            <div className='p-5 w-[80%] flex flex-col'>
                <div className='h-full w-full flex'>

                    <div className='w-1/2 h-full flex flex-row-reverse items-end justify-end pb-[200px] gap-10'>
                        <div className='absolute top-0 left-[11%] text-[15px] font-light tracking-widest mt-[150px]'>03 SPACE LAUNCH 101</div>
                        <Material/>
                        <div className='flex flex-col gap-5 z-20'>
                            {
                                Data.technology.map((element, key) => (
                                    <Link
                                      className='uppercase text-[15px] font-light tracking-widest'
                                      key={key}
                                      to={`/Home/Technology/Material/${key}`}>
                                      <div
                                        onClick={() => setActiveKey(key)}
                                        className={`size-[20px]  border-[1px] transition-all border-white p-8 flex justify-center items-center rounded-full ${activeKey == key ? 'bg-white text-black' : 'text-white'}`}>
                                        {key + 1}
                                      </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technology;