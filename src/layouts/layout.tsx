import Hero from '@/components/Hero';
import Footer from '@/components/Footers';
import Header from '@/components/ui/Header';
import React from 'react';
import mylogo from '../assets/logolatest.jpeg';

type Props={
    children:React.ReactNode;
    showHero?:boolean;
};
const Layout = ({children,showHero = false}:Props)=>{
    return(
        <div>
            <div className='hidden xl:block'>
      <img src={mylogo} className="absolute top-0 left-4 w-14 h-14 m-4" alt="Logo" />
      </div>
            <div className='flex flex-col min-h-screen'>
            <Header/>
            {showHero && <Hero/>}
            <div className='container mx-auto flex-1 py-10'>{children}</div>
            <Footer/>
            </div>
        </div>
        
    )
}

export default Layout
