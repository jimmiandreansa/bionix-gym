import { Link } from "react-router-dom"
import Logo from '../images/logo2.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum magnam voluptates dicta, natus enim culpa repellat iusto explicabo veritatis perspiciatis!
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebookF/></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter/></a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about" className="footer__link">About</Link>
                    <Link to="/plans" className="footer__link">Plans</Link>
                    <Link to="/trainers" className="footer__link">Trainers</Link>
                    <Link to="/gallery" className="footer__link">Gallery</Link>
                    <Link to="/contact" className="footer__link">About</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s" className="footer__link">Blog</Link>
                    <Link to="/s" className="footer__link">Case Studies</Link>
                    <Link to="/s" className="footer__link">Events</Link>
                    <Link to="/s" className="footer__link">Communities</Link>
                    <Link to="/s" className="footer__link">FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact" className="footer__link">Contact Us</Link>
                    <Link to="/s" className="footer__link">Support</Link>
                </article>
            </div>
            <div className="footer__copyright">
                <small>2022 || Jimmi Andreansa &copy; All Rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer