import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { tokenApiSpotify } from '../../services/fetchToken.js'
import play from './assets/play_icon.svg'
import { MdOutlineShare } from "react-icons/md";
import { LiaEllipsisVSolid } from "react-icons/lia";

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

                const headers = {'Authorization': `Bearer ${ token }`}

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
            finally{
                setLoading(false)
            }
        }

        fetchData()

    }, [id])

    if (loading) {
        return(
            <div className='h-screen flex justify-center items-center'>
                <p className="loading loading-ring loading-lg m-auto"></p>
            </div>
        )
    }

    if (errorMessage) {
        return(
            <div className='h-screen flex justify-center items-center'>
                <p className="text-red-600">Problemas en el servidor, intenta más tarde.</p>
            </div>
        )
    }
    
    return (
        <section className='pt-20 px-4 bg-[#121212] space-y-5 text-white lg:ml-[20rem] lg:px-7 lg:pt-0 lg:mr-2'>
                <div className=' space-y-5'>
                    <img className='m-auto rounded-full h-36 w-36 object-cover' src={artist.images[0].url} alt={artist.name} />
                    <h2 className=' font-bold text-3xl pb-3'>{artist.name}</h2>
                    <small className='text-[#A7A7A7]'>{artist.followers.total.toLocaleString()} oyentes mensuales</small>
                    <div className=' flex justify-between items-center'>
                        <div className=' flex items-center space-x-6'>
                            <button className=' text-sm px-4 py-2 border border-[#A7A7A7] rounded-full font-bold'>Seguir</button>
                            <button><MdOutlineShare className='text-[#A7A7A7] text-2xl' /></button>
                            <button><LiaEllipsisVSolid className='text-[#A7A7A7] text-2xl' /></button>
                        </div>
                        <button>
                            <img className='w-12' src={play} alt="icono de play" />
                        </button>
                    </div>
                </div>
                <div>
                    <h3 className=' text-xl font-bold'>Populares</h3>
                </div>
                <div>
                    <h3 className=' text-xl font-bold'>Álbumes</h3>
                </div>
            
        </section>
    )
}

export default ItemArtist