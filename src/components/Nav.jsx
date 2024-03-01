import React, { useRef } from 'react';
import Navlogo from './../assets/img/shared/logo.svg'
import { Link } from 'react-router-dom';

const Nav = () => {

    const link1 = useRef(null)
    const link2 = useRef(null)
    const link3 = useRef(null)
    const link4 = useRef(null)

    let changeActive = (x) => {
        let links = [link1, link2, link3, link4]
        links.forEach(element => {
            element == x ? element.current.classList.add("text-purple-300", "pointer-events-none") : element.current.classList.remove("text-purple-300", "pointer-events-none")
        });
    }



    return (
        <div className='h-[80px] flex gap-5 absolute top-10 right-10 left-10'>
            <div className='w-1/3 h-full flex items-center'>
                <img src={Navlogo} className='w-[50px]' alt="" />
                <div className='h-[1px] bg-[#f2f2f2b9] w-full ml-5'></div>
            </div>
            <div className='w-2/3 h-full bg-[#f2f2f20a] flex justify-center gap-16 rounded-[5px] backdrop-blur-[5px]'>
                <Link ref={link1} onClick={()=> changeActive(link1)} className='text-purple-300 pointer-events-none transition-all text-light tracking-widest text-[15px] flex justify-center items-center' to='/Home'>00 - HOME</Link>
                <Link ref={link2} onClick={()=> changeActive(link2)} className=' transition-all text-light tracking-widest text-[15px] flex justify-center items-center' to='/Home/Destination/Planet/0'>01 - DESTINATION</Link>
                <Link ref={link3} onClick={()=> changeActive(link3)} className=' transition-all text-light tracking-widest text-[15px] flex justify-center items-center' to='/Home/Crew/Member/0'>02 - CREW</Link>
                <Link ref={link4} onClick={()=> changeActive(link4)} className=' transition-all text-light tracking-widest text-[15px] flex justify-center items-center' to='/Home/Technology/Material/0'>03 - TECHNOLOGY</Link>
            </div>
        </div>
    );
}

export default Nav;