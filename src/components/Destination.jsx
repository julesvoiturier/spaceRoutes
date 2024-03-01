import React, { useRef , useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Data from './../assets/data.json'
import Planet from './Planet';

const Destination = (props) => {
    const [activeKey, setActiveKey] = useState(0);

    return (
        <div className='h-full w-full flex justify-center bg-[#00000052]'>
            <div className='absolute -z-10 h-full w-full bg-cover bg-center bg-[url(./assets/img/destination/background-destination-desktop.jpg)] bg-multiply'></div>
            <div className='p-5 w-[80%] flex flex-col'>
                <div className='h-full w-full flex'>

                    <div className='w-1/2 h-full flex items-end'>
                        <div className='absolute top-0 left-[11%] text-[15px] font-light tracking-widest mt-[150px]'>01 PICK YOUR DESTINATION</div>
                    </div>

                    <div className='w-1/2 h-full flex items-end'>
                        <div className='flex gap-8 z-20'>
                            {
                                Data.destinations.map((element, key) => (
                                    <Link
                                      className='uppercase text-[15px] font-light tracking-widest'
                                      key={key}
                                      to={`/Home/Destination/Planet/${key}`}>
                                      <div
                                        onClick={() => setActiveKey(key)}
                                        className={`size-[20px]  transition-all p-8 flex justify-center items-center rounded-full ${activeKey == key ? ' text-purple-300' : 'text-white'}`}>
                                        {element.name}
                                      </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    
                </div>
                
                <div className='h-[160px]'></div>
                <main>
                    <Planet/>
                </main>
                
            </div>
        </div>
    );
}

export default Destination;