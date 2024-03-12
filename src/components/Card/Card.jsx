import React from 'react'
import play from './assets/play_icon.svg'
import { Link } from 'react-router-dom'

                            
const Card = ({ id, title, imageUrl, artist }) => {


    return (
        <Link to={`/artist/${id}`} className=" relative carousel-item flex flex-col w-36 min-h-48 space-y-2 lg:bg-[#181818] rounded-lg lg:hover:bg-gradient-to-t from-[#292929] to-[#202020] group  lg:w-48 lg:p-4">
            <img src={imageUrl} className='w-[100%] h-36 object-cover rounded-md lg:h-48 lg:rounded-full' alt={title} />
            <h6 className='text-white lg:font-bold'>{title}</h6>
            <small className=' text-sm text-[#a8a8a5] text-start hidden lg:block'>{artist}</small>
            <div className="absolute bottom-[7rem] right-7 transform translate-y-full opacity-0 lg:group-hover:opacity-100 group-hover:translate-y-10 transition duration-300">
                <img className='w-12' src={play} alt="icono de play" />
            </div>
        </Link>
    )
}

export default Card