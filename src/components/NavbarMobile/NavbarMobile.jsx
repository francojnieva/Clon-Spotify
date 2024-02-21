import React from 'react'
import logo from './assets/spotify_icon.svg'
import { LuSearch } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";

const NavbarMobile = () => {
    return (
        <div className='p-3 bg-[#000000] flex justify-between items-center'>
            <img className='w-9' src={logo} alt="Logo de Spotify" />
            <div className=' flex  items-center space-x-5'>
                <LuSearch className=' text-white text-lg' />
                <button className='bg-white text-black rounded-full py-2 px-4 text-xs font-bold'>Abrir aplicación</button>
                <AiOutlineMenu className='text-white text-2xl' />
            </div>
        </div>
    )
}

export default NavbarMobile