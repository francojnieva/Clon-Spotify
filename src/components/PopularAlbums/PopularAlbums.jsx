import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { tokenApiSpotify } from '../../services/fetchToken.js'
import axios from 'axios'

const PopularAlbums = () => {

    const URL = 'https://api.spotify.com'

    const [popularAlbums, setPopularAlbums] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fechtData = async () => {
            try {
                const token = await tokenApiSpotify()

                const responsePopularAlbums = await axios.get(`${URL}/v1/albums?ids=6i7mF7whyRJuLJ4ogbH2wh,30zwjSQEodaUXCn11nmiVF,18NOKLkZETa4sWwLMIm0UZ,2RRYaYHY7fIIdvFlvgb5vq,07w0rG5TETcyihsEIZR3qG`,
                {
                    headers: {
                        'Authorization': `Bearer ${ token }`
                    }
                })
                setPopularAlbums(responsePopularAlbums.data.albums)

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
        <section className='px-4 pb-5 bg-[#121212] text-white lg:pl-7 lg:mr-2 lg:ml-[20rem]'>
                <div className=' flex justify-between items-center'>
                    <h1 className=' text-lg font-bold lg:text-2xl hover:underline hover:cursor-pointer'>Álbumes populares</h1>
                    <a className=' text-sm font-bold text-[#adadad] hover:underline hover:cursor-pointer hidden lg:block'>Mostrar todo</a>
                </div>
                <div className="carousel carousel-center w-full pt-2 pb-3 space-x-4">
                {loading && <p className="loading loading-ring loading-lg m-auto"></p>}
                {errorMessage && <p className=' text-center text-red-600'>Problemas en el servidor, intenta más tarde.</p>}
                {popularAlbums.map((album) => (
                        <Card
                            key={album.id}
                            title={album.name}
                            imageUrl={album.images[0].url}
                            artist={album.artists[0].name}
                        />
                    ))}
                </div>
            </section>
    )
}

export default PopularAlbums