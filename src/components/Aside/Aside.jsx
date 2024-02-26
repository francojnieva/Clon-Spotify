import React from 'react'
import { LuSearch } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import logo from './assets/spotify-logo.svg'
import { FiPlus } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

const Aside = () => {
    return (
        <aside className='hidden lg:block m-2 rounded-lg w-[19rem] text-[#adadad] fixed top-0'>
            <div className='px-5 pb-6 mb-2 bg-[#121212] rounded-lg' >
                <img className='w-20 hover:cursor-pointer' src={logo} alt="Logo de Spotify" />
                <div className=' space-y-6'>
                    <button className='tracking-wider flex items-center font-bold text-[.95rem] transition-all hover:text-white' >
                        <GoHome className='mr-4 text-[1.75rem]' />
                        Inicio
                    </button>
                    <button className='tracking-wider flex items-center font-bold text-[.95rem] transition-all hover:text-white' >
                        <LuSearch className='mr-4 text-[1.6rem]' />
                        Buscar
                    </button>
                </div>
            </div>
            <div className='px-2 pb-20 pt-4 bg-[#121212] rounded-lg'>
                <div className=' flex items-center justify-between pb-4'>
                    <div className="tooltip pl-3" data-tip="Comprimir Tu biblioteca">
                        <button className=" flex font-bold tracking-wide transition-all hover:text-white">
                            <BiLibrary className=' text-2xl mr-2 ' />
                            Tu biblioteca
                        </button>
                    </div>
                    <div className="tooltip" data-tip="Crear una playlist o una carpeta">
                        <FiPlus className=' text-[1.3rem] hover:cursor-pointer' />
                    </div>
                </div>
                <div className='text-white h-[4.7rem] w-[19rem] overflow-scroll space-y-7 scrollbar '>
                    <div className=' p-3 bg-[#242424] space-y-3 rounded-xl'>
                        <h6 className='font-bold'>Crea tu primera playlist</h6>
                        <p className=' text-sm'>¡Es muy facil, te vamos a ayudar!</p>
                        <button className='py-1 px-3 text-sm bg-white font-bold text-black rounded-full'>Crear playlist</button>
                    </div>
                    <div className=' p-3 bg-[#242424] space-y-3 rounded-xl'>
                        <h6 className='font-bold'>Busquemos algunos podcasts para seguir</h6>
                        <p className=' text-sm'>Te mantendremos al tanto de los nuevos episodios. </p>
                        <button className='py-1 px-3 text-sm bg-white font-bold text-black rounded-full'>Explorar podcasts</button>
                    </div>
                </div>
                <div className='pt-8 pb-12 px-3 space-y-5'>
                    <div className=' flex flex-wrap gap-6 text-[.68rem] md:gap-4'>
                        <a>Legal</a>
                        <a>Seguridad y Centro de Privacidad</a>
                        <a>Política de Privacidad</a>
                        <a>Cookies</a>
                        <a>Sobre los anuncios</a>
                        <a>Accecibilidad</a>
                        <a>Notice at Collection</a>
                        <a>Your Privacy Choices</a>
                    </div>
                    <div className='text-sm pb-4 lg:hidden'>
                        <a>&copy; 2024 Spotify AB</a>
                    </div>
                    <button className='py-2 px-3 rounded-full border border-[#7a7a7a] flex items-center font-medium text-white text-xs hover:border-white hover:scale-105 md:text-sm'>
                        <TbWorld className=' text-xl mr-1' />
                        Español de Lationamérica
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Aside