import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import './about.css'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime facere optio minima sunt molestiae quos hic debitis.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium temporibus maxime numquam laboriosam nesciunt quidem voluptatum, ab architecto. Accusamus eligendi at consequuntur? Cumque, adipisci.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum esse dolore facere natus doloribus! Repellat, aliquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores deleniti reiciendis sequi accusantium quisquam est rem similique repellat accusamus? Tempore neque facere dicta! Totam?</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium temporibus maxime numquam laboriosam nesciunt quidem voluptatum, ab architecto. Accusamus eligendi at consequuntur? Cumque, adipisci.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores deleniti reiciendis sequi accusantium quisquam est rem similique repellat accusamus? Tempore neque facere dicta! Totam?</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat laudantium temporibus maxime numquam laboriosam nesciunt quidem voluptatum, ab architecto. Accusamus eligendi at consequuntur? Cumque, adipisci.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum esse dolore facere natus doloribus! Repellat, aliquam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint asperiores deleniti reiciendis sequi accusantium quisquam est rem similique repellat accusamus? Tempore neque facere dicta! Totam?</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About