import React from 'react'

const RegistrationBanner = () => {
    return (
        <section className='hidden lg:block lg:fixed bg-black bottom-0 w-full p-2 hover:cursor-pointer'>
            <div className=' text-white flex items-center justify-between py-2 px-5 bg-gradient-to-r from-[#AD2B98] to-[#5C8DE9]'>
                <div className=' w-[70%]'>
                    <h6 className=' font-bold text-sm'>Muestra de Spotify</h6>
                    <p>Regístrate para acceder a las canciones y podcasts ilimitados con algunos anuncios. No necesitas tarjeta de crédito.</p>
                </div>
                <button className=' bg-white text-black py-3 px-8 rounded-full font-bold hover:scale-105'>Regístrate gratis</button>
            </div>

        </section>
    )
}

export default RegistrationBanner