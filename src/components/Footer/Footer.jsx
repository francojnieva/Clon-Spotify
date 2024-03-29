import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import SubFooter from '../SubFooter/SubFooter';

const Footer = () => {
	return (
		<section className='px-4 bg-[#121212] lg:rounded-b-lg pt-8 lg:ml-[20rem] lg:pl-7 lg:mr-2 lg:pb-20'>
			<footer className="footer py-5 mb-7">
				<nav>
					<h6 className="font-bold text-white text-base">Compañía</h6>
					<a className="footer-links">Acerca de</a>
					<a className="footer-links">Empleo</a>
					<a className="footer-links">For the Record</a>
				</nav>
				<nav>
					<h6 className="font-bold text-white text-base">Comunidades</h6>
					<a className="footer-links">Para artistas</a>
					<a className="footer-links">Desarrolladores</a>
					<a className="footer-links">Publicidad</a>
					<a className="footer-links">Inversionistas</a>
					<a className="footer-links">Proveedores</a>
				</nav>
				<nav>
					<h6 className="font-bold text-white text-base">Enlaces útiles</h6>
					<a className="footer-links">Ayuda</a>
					<a className="footer-links">App móvil gratis</a>
				</nav>
				<nav>
					<div className="grid grid-flow-col gap-4">
						<a><FaInstagram className='footer-icon' /></a>
						<a><FaTwitter className='footer-icon' /></a>
						<a><FaFacebook className='footer-icon' /></a>
					</div>
				</nav>
			</footer>
			<hr className=' pt-10 border-t-[#272626]' />
			<p className='hidden text-[#bbbbb4] mt-5 lg:block lg:text-sm lg:pb-16'>© 2024 Spotify AB</p>
			<SubFooter />
		</section>
	)
}

export default Footer