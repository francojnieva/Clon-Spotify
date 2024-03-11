import React from 'react'
import { LuSearch } from "react-icons/lu";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs";

const NavbarMobile = () => {

    return (
        <div className='fixed top-0 w-full p-3 bg-[#000000] z-50 flex justify-between items-center lg:hidden'>
            <BsSpotify className=' text-white text-4xl' />
            <div className='flex items-center space-x-5'>
                <div className=' flex items-center space-x-5'>
                    <LuSearch className=' text-white text-lg' />
                    <button className='bg-white w-32 text-black rounded-full py-2 px-4 text-xs font-bold md:text-sm md:py-1.5 md:w-36'>Abrir aplicación</button>
                </div>
                <div className="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <label htmlFor="my-drawer-4"><AiOutlineMenu  className='text-white text-2xl'/></label>
                    <div className={`drawer-side transition-all `}>
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-5 w-full min-h-full bg-black text-white">
                            <div className=' flex justify-end'>
                                <AiOutlineClose  onClick={()=>document.getElementById("my-drawer-4").checked = false} className=' text-[1.7rem]' />
                            </div>
                            <li className='font-bold text-[1.4rem] space-y-5 py-7'>
                                <a>Iniciar Sesión</a>
                                <a>Registrarse</a>
                            </li>
                            <hr className='w-4 ml-4 border border-white my-3'/>
                            <li className=' text-[1.05rem] font-bold space-y-1 py-6'>
                                <a>Premium</a>
                                <a>Ayuda</a>
                                <a>Descargar</a>
                                <a>Pirvacidad</a>
                                <a>Términos y Condiciones</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile