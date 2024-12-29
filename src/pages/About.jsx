import about from "../assets/about.png"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './styles/about.css'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import lab from '../assets/lab.png'	

const About = () => {
    useEffect(() => {
            AOS.init();
          }, []);
  return (
      <div className="container box" data-aos="fade-left">
          <h1 className="mt-5 mb-5 about"><b><u>ABOUT</u> US</b></h1>
          <div className="row justify-content-center gap-0">
              <div className="col-md-6">
                  <img src={about} className="img-fluid" alt="" />
              </div>
              <div className="col-md-6 align-content-center">
                  <div className="">
                      <p>At Computer Cool, we are committed to delivering innovative IT solutions that drive efficiency,
 productivity, and growth. With a focus on cutting-edge technology, exceptional customer service, 
and tailored solutions, we empower businesses and individuals to thrive in the digital era. Our team of experts is dedicated to helping you navigate the ever-evolving tech landscape with confidence and ease.</p>
                  </div>
                  <button className="btn button3 btn-primary btn-lg btn-rounded">Learn More</button>
                  
                  </div>
          </div>
          <div className="row justify-content-center">
              <div data-aos="zoom-in">
              <h3 className="text-center para1"><b>Our Partners Trust Us With Their  Projects</b></h3>
              <p className="text-center text-black mt-3">Customer success always comes first</p>
              </div>
          </div>
          <div className="row justify-content-center logos">
              <div className="col-sm-2  d-flex flex-column align-items-center ">
                  <img src={logo1} className="img-fluid" alt="" />
              </div>
              <div className="col-sm-2  d-flex flex-column align-items-center">
                  <img src={logo2} className="img-fluid" alt="" />
              </div>
              <div className="col-sm-2  d-flex flex-column align-items-center">
                  <img src={logo3} className="img-fluid" alt="" />
              </div>
              <div className="col-sm-2  d-flex flex-column align-items-center">
                  <img src={logo4} className="img-fluid" alt="" />
              </div>
              <div className="col-sm-2  d-flex flex-column align-items-center">
                  <img src={logo5} className="img-fluid" alt="" />
              </div>
              <div className="col-sm-2  d-flex flex-column align-items-center">
                  <img src={logo1} className="img-fluid" alt="" />
              </div>
              
          </div>
          <div className="row justify-content-center mt-5">
              <div className="col-sm-6 mt-5" data-aos="fade-right">
                  <h2><b>Misson</b></h2>
                  <p className="mt-3 fw-bold">We aim to provide reliable and superior state-of-the-art software solutions and designs to our clients at an affordable price. We are working towards bringing quality, simplicity and scalability to our solutions leading to professional growth for our clients as well as employees. We aim to be a part of the client business that serves them with bigger profits.</p>
                  
              </div>
              <div className="col-sm-6 mt-5" data-aos="fade-left">
                  <h2><b>Vision</b></h2>
                  <p className="mt-3 fw-bold">Our Vision is to become a leading global technology provider of the country. Our organisation exists to acquire global competence through innovation and product development. We aspire to become the ideators of the IT-industry and be pioneers of new frameworks.</p>
              </div>
          </div>
          <div className="row justify-content-center mt-5 mb-5">
              <div className="col-sm-8" data-aos="flip-left">
                  <img src={lab} className="img-fluid" alt="" />
              </div>
              
          </div>
          
   </div>
  )
}

export default About