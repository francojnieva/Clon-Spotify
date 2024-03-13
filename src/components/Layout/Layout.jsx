import React from 'react'
import Aside from '../Aside/Aside'
import Footer from '../Footer/Footer'
import RegistrationBanner from '../RegistrationBanner/RegistrationBanner'
import NavbarMobile from '../NavbarMobile/NavbarMobile'
import NavbarDesktop from '../NavbarDesktop/NavbarDesktop'

const Layout = ({ children }) => {
    return (
        <section>
            <Aside />
            <NavbarMobile />
            <NavbarDesktop />
            {children}
            <Footer />
            <RegistrationBanner />
        </section>
    )
}

export default Layout