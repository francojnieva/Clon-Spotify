import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import { tokenApiSpotify } from '../../services/fetchToken.js'
import { Link } from 'react-router-dom'

const PopularArtistsSection = () => {

    const URL = 'https://api.spotify.com'

    const [popularArtist, setPopularArtist] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fechtData = async () => {
            try {
                const token = await tokenApiSpotify()

                const responsePopularArtist = await axios.get(`${URL}/v1/artists?ids=06HL4z0CvFAxyc27GXpf02,3TVXtAsR1Inumwj472S9r4,5K4W6rqBFWDnAN6FQUkS6x,0Y5tJX1MQlPlqiwlOH1tJY,1Xyo4u8uXC1ZmMpatF05PJ`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                setPopularArtist(responsePopularArtist.data.artists)

            } catch (error) {
                if (error.response.status === 401) {
                    console.log('El token ha expirado')
                } else {
                    console.error(error)
                    setErrorMessage(true)
                }
            } finally {
                setLoading(false)
            }
        }
        fechtData()
    }, [])

    return (
        <>
            <section className='px-4 pb-5 bg-[#121212] text-white lg:pl-7 lg:mr-2 lg:ml-[20rem]'>
                <div className=' flex justify-between items-center'>
                    <h1 className=' text-lg font-bold lg:text-2xl hover:underline hover:cursor-pointer'>Artistas populares</h1>
                    <a className=' text-sm font-bold text-[#adadad] hover:underline hover:cursor-pointer hidden lg:block'>Mostrar todo</a>
                </div>
                <div className="carousel carousel-center w-full pt-2 pb-3 space-x-4">
                    {loading && <p className="loading loading-ring loading-lg m-auto text-[#1FDF64]"></p>}
                    {errorMessage && <p className=' text-center text-red-600'>Problemas en el servidor, intenta más tarde.</p>}
                    {popularArtist.map((artist) => (
                        <Link key={artist.id} to={`/artist/${artist.id}`}>
                            <Card
                                key={artist.id}
                                id={artist.id}
                                title={artist.name}
                                imageUrl={artist.images[0].url}
                                type={artist.type}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}

export default PopularArtistsSection