import React from 'react'
import NavbarDesktop from '../NavbarDesktop/NavbarDesktop'
import NavbarMobile from '../NavbarMobile/NavbarMobile'

const SpotifyPlaylist = () => {
    return (
        <section className=' lg:pt-2'>
            <NavbarMobile />
            <NavbarDesktop />
          <section className='pt-20 px-4 bg-gradient-to-b from-[#1E1E1E] to-[#121212] text-white lg:pl-7 lg:mr-2 lg:ml-[20rem] lg:pt-3'>
                <div className=' flex justify-between items-center'>
                    <h1 className=' text-lg font-bold lg:text-2xl hover:underline'>Playlists de Spotify</h1>
                    <a className=' text-sm font-bold text-[#adadad] hover:underline hover:cursor-pointer'>Mostrar todo</a>
                </div>
                <div className="carousel carousel-center w-full mt-2 py-3 space-x-4">
                    <div className="carousel-item flex flex-col items-center space-y-4">
                        {/* <img src="" className="rounded-box" /> */}
                        <div className=' w-20 h-20 bg-red-400 rounded-md'></div>
                        <p className='text-sm'>sdfsdfdfsdfdf</p>
                    </div>
                    <div className="carousel-item flex flex-col items-center space-y-4">
                        {/* <img src="" className="rounded-box" /> */}
                        <div className=' w-20 h-20 bg-red-400 rounded-md'></div>
                        <p className='text-sm'>sdfsdfdfsdfdf</p>
                    </div>
                    <div className="carousel-item flex flex-col items-center space-y-4">
                        {/* <img src="" className="rounded-box" /> */}
                        <div className=' w-20 h-20 bg-red-400 rounded-md'></div>
                        <p className='text-sm'>sdfsdfdfsdfdf</p>
                    </div>
                    <div className="carousel-item flex flex-col items-center space-y-4">
                        {/* <img src="" className="rounded-box" /> */}
                        <div className=' w-20 h-20 bg-red-400 rounded-md'></div>
                        <p className='text-sm'>sdfsdfdfsdfdf</p>
                    </div>
                    <div className="carousel-item flex flex-col items-center space-y-4">
                        {/* <img src="" className="rounded-box" /> */}
                        <div className=' w-20 h-20 bg-red-400 rounded-md'></div>
                        <p className='text-sm'>sdfsdfdfsdfdf</p>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default SpotifyPlaylist