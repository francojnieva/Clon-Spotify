import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const NavbarDesktop = () => {
    return (
        <section className='hidden lg:block lg:ml-[20rem] lg:pr-2 lg:pt-2'>
            <nav className='flex justify-between bg-[#101010] p-2 lg:pl-7 lg:rounded-t-lg lg:pr-6'>
                <div className=' flex  items-center text-[#8a8a8a] space-x-2'>
                    <button className='hover:cursor-not-allowed'><IoIosArrowBack  className='p-1 rounded-full text-[2rem] bg-[#0A0A0A]'/></button>
                    <button className='hover:cursor-not-allowed'><IoIosArrowForward  className='p-1 rounded-full text-[2rem] bg-[#0A0A0A]'/></button>
                </div>
                <div className=' flex justify-between items-center text-[#8a8a8a] font-semibold space-x-7'>
                    <div className='border border-r-white border-y-transparent border-l-transparent flex items-center space-x-3 pr-8 tracking-widest'>
                        <a href='#' className='hover:text-white hover:scale-105 transition-all'>Premium</a>
                        <a href='#' className='hover:text-white hover:scale-105 transition-all'>Ayuda</a>
                        <a href='#' className='hover:text-white hover:scale-105 transition-all'>Descargar</a>
                    </div>
                    <div className=' flex items-center space-x-6'>
                        <a  href='#' className='hover:text-white hover:scale-105 transition-all'>Regístrate</a>
                        <a  href='#' className='py-3 px-8 bg-white text-black font-bold hover:scale-105 rounded-full hover:bg-slate-50'>Iniciar sesión</a>
                    </div>
                </div>
           </nav>
        </section>
       
    )
}

export default NavbarDesktop