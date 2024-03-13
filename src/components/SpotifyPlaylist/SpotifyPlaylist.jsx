import React from 'react'
import PopularArtistsSection from '../PopularArtistsSection/PopularArtistsSection'
import PopularAlbums from '../PopularAlbums/PopularAlbums'

const SpotifyPlaylist = () => {

    return (
        <section className='pt-20 bg-[#121212] lg:pt-0 lg:bg-transparent'>
            <PopularArtistsSection />
            <PopularAlbums />
        </section>
    )
}

export default SpotifyPlaylist