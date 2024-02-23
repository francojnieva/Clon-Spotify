import React from 'react'
import Footer from '../../components/Footer/Footer'
import SpotifyPlaylist from '../../components/SpotifyPlaylist/SpotifyPlaylist'
import RegistrationBanner from '../../components/RegistrationBanner/RegistrationBanner'
import Aside from '../../components/Aside/Aside'

const Home = () => {
    return (
        <section>
            <Aside />
            <SpotifyPlaylist />
            <Footer />
            <RegistrationBanner />
        </section>
    )
}

export default Home