import React from 'react';
import Member from './Member';
import Data from './../assets/data.json'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Crew = () => {
    const [activeKey, setActiveKey] = useState(0);
    return (
        <div className='h-full w-full flex justify-center '>
            <div className='absolute -z-10 h-full w-full bg-cover bg-center bg-[url(./assets/img/crew/background-crew-desktop.jpg)] bg-multiply'></div>
            <div className='p-5 w-[80%] flex flex-col'>
                <div className='h-full w-full flex'>

                    <div className='w-full h-full flex flex-col items-center justify-end pb-[200px]'>
                        <div className='absolute top-0 left-[11%] text-[15px] font-light tracking-widest mt-[150px]'>02 MEET YOUR CREW</div>
                        <Member/>
                        <div className='flex gap-8 z-20 w-full'>
                            {
                                Data.crew.map((element, key) => (
                                    <Link
                                      className='uppercase text-[15px] font-light tracking-widest'
                                      key={key}
                                      to={`/Home/Crew/Member/${key}`}>
                                      <div
                                        onClick={() => setActiveKey(key)}
                                        className={`size-[20px] transition-all flex justify-center items-center rounded-full hover:bg-white ${activeKey == key ? 'bg-white' : 'bg-[#f2f2f26a]'}`}>
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
export default Crew;