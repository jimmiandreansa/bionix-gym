import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import './contact.css'

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius voluptas perspiciatis ipsum recusandae repudiandae iusto necessitatibus qui?
            </Header>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a href="mailto:jimmiandreansa11@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
                        <a href="http://m.me/jimmiandreansa" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
                        <a href="https://wa.me/+82213189813" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact