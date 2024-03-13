import React from 'react'
import { FaSpotify } from "react-icons/fa";

const NotFound = () => {
    return (
        <section className='px-4 h-screen bg-[#121212] flex flex-col justify-center items-center space-y-6'>
            <FaSpotify className=' text-[#1ED760] text-6xl mb-3 ' />
            <h3 className=' text-white text-center font-bold text-4xl xl:text-5xl'>No se encontró la página</h3>
            <p className='text-[#A7A7A7] text-center font-medium'>No podemos encontrar la página que buscas.</p>
            <button className=' bg-white rounded-full text-black font-bold py-3 px-7'>Inicio</button>
            <a href="#" className=' text-white font-bold'>Ayuda</a>

        </section>
    )
}

export default NotFound