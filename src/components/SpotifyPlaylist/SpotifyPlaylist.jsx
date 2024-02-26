import React from 'react'
import NavbarDesktop from '../NavbarDesktop/NavbarDesktop'
import NavbarMobile from '../NavbarMobile/NavbarMobile'
import play from './assets/play_icon.svg'

const SpotifyPlaylist = () => {
    return (
        <section className=' lg:pt-2'>
            <NavbarMobile />
            <NavbarDesktop />
            <section className='pt-20 px-4 bg-gradient-to-b from-[#1E1E1E] to-[#121212] text-white lg:pl-7 lg:mr-2 lg:ml-[20rem] lg:pt-3 lg:pb-5'>
                <div className=' flex justify-between items-center'>
                    <h1 className=' text-lg font-bold lg:text-2xl hover:underline hover:cursor-pointer'>Playlists de Spotify</h1>
                    <a className=' text-sm font-bold text-[#adadad] hover:underline hover:cursor-pointer'>Mostrar todo</a>
                </div>
                <div className="carousel carousel-center w-full pt-2 pb-3 space-x-4">
                    <button className=" relative carousel-item flex flex-col w-48 min-h-64 space-y-4 bg-[#181818] p-4 rounded-lg hover:bg-gradient-to-t from-[#292929] to-[#202020] group">
                        <img src="" className='w-[100%] min-h-44 bg-blue-500 rounded-lg' alt="" />
                        <h6 className=' text-white font-bold'>sdfsdfdsfsdfsdfsfs</h6>
                        <small className=' text-sm text-[#a8a8a5] text-start'>dfsdfdsfdfdfsdfdsfdsfdsd  sfsdfdfsdfsd fdsfdfsdf</small>
                        <div className="absolute bottom-[10rem] right-7 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-10 transition duration-300">
                            <img className='w-12' src={play} alt="" />
                        </div>
                    </button>
                </div>
            </section>
        </section>

    )
}

export default SpotifyPlaylist