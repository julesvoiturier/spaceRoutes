import React from 'react';
import Nav from './Nav'
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='w-screen h-screen'>
            <div className='h-full w-full'>
                <Nav/>
                <main className='w-full h-full'>
                    <Outlet/>
                </main>
            </div>
        </div>
    );
}

export default Layout;
