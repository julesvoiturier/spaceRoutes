import React from 'react';
import { Link } from 'react-router-dom';



const Home = (props) => {
    return (
        <div className='h-full w-full flex justify-center bg-[#00000052]'>
            <div className='absolute -z-10 h-full w-full bg-blend-multiply bg-cover bg-center bg-[url(./assets/img/home/background-home-desktop.jpg)]'></div>
            <div className='p-5 w-[80%] flex flex-col items-end'>
                <div className='h-[160px]'></div>
                <div className='h-full w-full flex items-end pb-[200px]'>
                    <div className='w-1/2 flex flex-col gap-6'>
                        <p className='font-bold tracking-widest'>SO, YOU WANT TO TRAVEL TO</p>
                        <p className=' text-[200px] tracking-thin leading-none'>SPACE</p>
                        <p className='w-[80%] font-thin tracking-widest'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                    </div>
                    <div className='w-1/2 flex justify-end'>
                        <Link to='/Home/Destination/Planet/0' className='bg-[#000000ba]  relative size-[300px] flex justify-center items-center rounded-full text-white text-[25px] overflow-hidden group hover:text-black'>
                        <div className='z-20 transition-all duration-[300ms] mix-blend-difference tracking-tight group-hover:tracking-[10px]'>EXPLORE</div>
                            <div className=' absolute transition-all  duration-[300ms] w-0 h-full bg-white  flex justify-center items-center group-hover:size-[100%] group-hover:text-black group-hover:bg-white '></div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
