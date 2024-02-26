import React from 'react'
import { TbWorld } from "react-icons/tb";

const SubFooter = () => {
    return (
        <section className='text-[#bbbbb4] pb-7 lg:hidden'>
            <div className=' flex flex-wrap gap-6 pb-4 text-sm md:gap-4'>
                <a>Legal</a>
                <a>Seguridad y Centro de Privacidad</a>
                <a>Política de Privacidad</a>
                <a>Cookies</a>
                <a>Sobre los anuncios</a>
                <a>Accecibilidad</a>
                <a>Notice at Collection</a>
                <a>Your Privacy Choices</a>
            </div>
            <div className='text-sm pb-4'>
                <a>&copy; 2024 Spotify AB</a>
            </div>
            <button className='py-1 px-3 rounded-full border border-[#7a7a7a] flex items-center font-medium text-white text-xs hover:border-white hover:scale-105 md:text-sm'>
                <TbWorld className=' text-xl mr-1' />
                Español de Lationamérica
            </button>
        </section>
    )
}

export default SubFooter