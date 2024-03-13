import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { tokenApiSpotify } from '../../services/fetchToken'
import axios from 'axios'
import play from './assets/play_icon.svg'
import { MdOutlineShare } from 'react-icons/md'
import { LiaEllipsisVSolid } from 'react-icons/lia'
import { HiEllipsisHorizontal } from 'react-icons/hi2'
import { CiHeart } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

const ItemAlbum = () => {

    const URL = 'https://api.spotify.com/v1'
    const { id } = useParams()

    const [album, setAlbum] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await tokenApiSpotify()

                const headers = { 'Authorization': `Bearer ${token}` }

                const responseAlbum = await axios.get(`${URL}/albums/${id}`, { headers })

                setAlbum(responseAlbum.data)
                console.log(responseAlbum.data)

            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log('El token ha expirado')
                } else {
                    console.log('Error al recibir los datos', error)
                    setErrorMessage(true)
                }
            }
            finally {
                setLoading(false)
            }
        }

        fetchData()

    }, [id])

    const Image = album.images[0].url

    return (
        <section className='pt-20 px-4 bg-[#121212] space-y-5 text-white lg:ml-[20rem] lg:px-0 lg:pt-0  lg:mr-2'>
            {errorMessage && <div className='h-80 screen flex justify-center items-center'>
                <p className="text-red-600">Problemas en el servidor, intenta más tarde.</p>
            </div>}
            {loading && <div className='h-80 flex justify-center items-center'>
                <p className="loading loading-ring loading-lg m-auto text-[#1FDF64]"></p>
            </div>}
            <div className='hidden lg:block px-4 lg:pt-4 '>
                <div className='flex items-end lg:px-4'>
                    <img className='w-44 rounded-md mr-5 xl:w-56' src={Image} alt={album.name} />
                    <div>
                        <h2 className=' font-bold text-3xl pb-3 lg:text-5xl'>{album.name}</h2>
                        <div className='flex items-center space-x-3 text-[#A7A7A7] lg:text-white lg:text-lg'>
                            <small className='text-[#A7A7A7] lg:text-white'>{album.artists[0].name}</small>
                            <p>▪</p>
                            <small>{album.release_date.split('-')[0]}</small>
                            <p>▪</p>
                            <small>{album.total_tracks} canciones</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' space-y-3 lg:hidden'>
                <img className='m-auto -mt-5  w-40 object-cover' src={Image} alt={album.name} />
                <h2 className=' font-bold text-3xl pb-3 lg:text-8xl'>{album.name}</h2>
                <small className='text-[#A7A7A7] lg:text-white lg:text-lg'>{album.artists[0].name}</small>
                <div className='flex items-center space-x-3 text-[#A7A7A7] lg:text-white lg:text-lg'>
                    <small>{album.release_date.split('-')[0]}</small>
                    <p>▪</p>
                    <small>{album.total_tracks} canciones</small>
                </div>
            </div>
            <div className='flex justify-between items-center lg:px-7 lg:justify-end lg:flex-row-reverse xl:py-4'>
                <div className=' flex items-center space-x-6'>
                    <button className='lg:hover:scale-105 '><CiHeart className='text-[#A7A7A7] text-4xl lg:hover:text-white' /></button>
                    <button className='lg:hidden'><MdOutlineShare className='text-[#A7A7A7] text-2xl' /></button>
                    <button className='lg:hover:scale-105 lg:hidden'><LiaEllipsisVSolid className='text-[#A7A7A7] text-2xl' /></button>
                    <button className='hidden lg:block lg:hover:scale-105'><HiEllipsisHorizontal className='text-[#A7A7A7] text-3xl' /></button>
                </div>
                <button className='lg:mr-7 lg:hover:scale-105'>
                    <img className='w-12' src={play} alt="icono de play" />
                </button>
            </div>
            <div className='hidden lg:block text-[#A7A7A7] lg:px-4'>
                <div className='lg:flex justify-between items-center'>
                    <small>Título</small>
                    <IoTimeOutline />
                </div>
            </div>
            <div className='mb-4 lg:px-4'>
                {album.tracks.items.map(track => (
                    <div key={track.id} className='pl-2 py-2 flex justify-between items-center lg:px-4 hover:bg-[#2c2b2b] space-y-6 group'>
                        <div className=' flex flex-col'>
                            <p>{track.name}</p>
                            <small className='ml-0 text-[#A7A7A7] font-medium'>{track.artists[0].name}</small>
                        </div>
                        <div className='text-[#9E9E9E] flex items-center lg:space-x-3'>
                            <CiHeart className='text-2xl mr-5 hidden opacity-0 lg:group-hover:opacity-100 hover:text-white lg:block' />
                            <LiaEllipsisVSolid className='text-2xl text-white lg:hidden' />
                            <p className='hidden lg:block text-sm font-medium'>{(track.duration_ms / 60000).toFixed(2).replace('.', ':')}</p>
                            <HiEllipsisHorizontal className='hidden text-2xl text-white opacity-0 lg:block lg:group-hover:opacity-100' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ItemAlbum