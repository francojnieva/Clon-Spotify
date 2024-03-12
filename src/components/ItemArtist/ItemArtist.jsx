import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { tokenApiSpotify } from '../../services/fetchToken.js'
import play from './assets/play_icon.svg'
import { MdOutlineShare } from "react-icons/md";
import { LiaEllipsisVSolid } from "react-icons/lia";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";

const ItemArtist = () => {

    const URL = 'https://api.spotify.com/v1'
    const { id } = useParams()

    const [artist, setArtist] = useState([])
    const [topTracks, setTopTracks] = useState([])
    const [albums, setAlbums] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await tokenApiSpotify()

                const headers = { 'Authorization': `Bearer ${token}` }

                const [responseArtist, responseTopTracks, responseAlbums] = await Promise.all([
                    axios.get(`${URL}/artists/${id}`, { headers }),
                    axios.get(`${URL}/artists/${id}/top-tracks`, { headers }),
                    axios.get(`${URL}/artists/${id}/albums`, { headers })
                ])
                setArtist(responseArtist.data)
                setTopTracks(responseTopTracks.data.tracks)
                setAlbums(responseAlbums.data.items)

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

    if (loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <p className="loading loading-ring loading-lg m-auto text-[#1FDF64]"></p>
            </div>
        )
    }

    if (errorMessage) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <p className="text-red-600">Problemas en el servidor, intenta más tarde.</p>
            </div>
        )
    }

    return (
        <section className='pt-20 px-4 bg-[#121212] space-y-5 text-white lg:ml-[20rem] lg:px-0 lg:pt-0  lg:mr-2'>
            <div className=' space-y-5 hidden bg-cover bg-center lg:block px-4 py-12' style={{ backgroundImage: `url(${artist.images[0].url})` }}>
                <h2 className=' font-bold text-3xl pb-3 lg:text-6xl xl:text-8xl'>{artist.name}</h2>
                <small className='text-[#A7A7A7] font-medium lg:text-white xl:text-lg'>{artist.followers.total.toLocaleString()} oyentes mensuales</small>
            </div>
            <div className=' space-y-5 lg:hidden'>
                <img className='m-auto -mt-5 rounded-full h-36 w-36 object-cover' src={artist.images[0].url} alt={artist.name} />
                <h2 className=' font-bold text-3xl pb-3 lg:text-8xl'>{artist.name}</h2>
                <small className='text-[#A7A7A7] lg:text-white lg:text-lg'>{artist.followers.total.toLocaleString()} oyentes mensuales</small>
            </div>
            <div className='flex justify-between items-center lg:px-4 lg:justify-end lg:flex-row-reverse'>
                <div className=' flex items-center space-x-6'>
                    <button className=' text-sm px-4 py-2 border border-[#A7A7A7] rounded-full font-bold lg:hover:scale-105'>Seguir</button>
                    <button className='lg:hidden'><MdOutlineShare className='text-[#A7A7A7] text-2xl' /></button>
                    <button className='lg:hover:scale-105'><LiaEllipsisVSolid className='text-[#A7A7A7] text-2xl' /></button>
                </div>
                <button className='lg:mr-4 lg:hover:scale-105'>
                    <img className='w-12' src={play} alt="icono de play" />
                </button>
            </div>
            <div className=' lg:px-4'>
                <h3 className=' text-xl font-bold mb-4'>Popular</h3>
                <div className='mb-4'>
                    {topTracks.map(track => (
                        <div key={track.id} className=' py-2 flex justify-between items-center lg:px-4 lg:hover:bg-[#2c2b2b] group'>
                            <div className=' flex items-center space-x-3'>
                                <img className='w-12 rounded-md' src={track.album.images[0].url} alt={track.name} />
                                <p>{track.name}</p>
                            </div>
                            <div className='text-[#9E9E9E] flex items-center space-x-3'>
                                <CiHeart className='text-2xl mr-5 opacity-0 lg:group-hover:opacity-100 hover:text-white' />
                                <p className=' text-sm font-medium'>{(track.duration_ms / 60000).toFixed(2).replace('.', ':')}</p>
                                <HiEllipsisHorizontal className=' text-2xl text-white opacity-0 lg:group-hover:opacity-100' />
                            </div>
                        </div>
                    ))}
                </div>
                <h3 className=' text-xl font-bold mb-4'>Álbumes</h3>
                <div className="carousel carousel-center w-full space-x-4">
                    {albums.map(album => (
                        <Link key={album.id} className=" relative carousel-item flex flex-col w-36 h-[18rem] space-y-2 lg:bg-[#181818] rounded-lg lg:hover:bg-gradient-to-t from-[#292929] to-[#202020] group  lg:w-48 lg:p-4">
                        <img src={album.images[0].url} className='w-48 rounded-md' alt={album.name} />
                        <h6 className='text-white lg:font-bold'>{album.name}</h6>
                        <small className=' text-sm text-[#a8a8a5] text-start'>{album.release_date.split('-')[0]}</small>
                        <div className="absolute bottom-[10rem] right-7 transform translate-y-full opacity-0 lg:group-hover:opacity-100 group-hover:translate-y-10 transition duration-300">
                            <img className='w-12' src={play} alt="icono de play" />
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ItemArtist