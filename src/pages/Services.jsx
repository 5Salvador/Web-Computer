import './styles/Services.css'
import { useEffect } from 'react'
import services from '../assets/services.png'
import web from '../assets/design.png'
import dev from '../assets/development.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services = () => {
    useEffect(() => {
                AOS.init();
              }, []);
  return (
      <>
          <div className="container">
              <h1 className='services' data-aos="zoom-out"><b><u>OUR SERVICES</u></b></h1>
              <div className='row justify-content-center margin'>
                  <div className='col-md-6 align-content-center' data-aos="flip-up">
                      <p className=''>We offer a comprehensive range of IT solutions designed to meet your unique needs. From advanced computer hardware and software development to IT consulting and managed services, our expertise ensures reliable, scalable, and future-ready solutions to drive your success in a rapidly evolving digital landscape.</p>
                  </div>
                  <div className='col-md-6' data-aos="fade-in-left">
                    <img src={services} className='img-fluid' alt="" />
                  </div>
              </div>
              <h2 className='services mt-5' data-aos="zoom-out"><b>What we do</b></h2>
             
                  
            <div className="container cards" data-aos="fade-down">
            <div className="row g-4">
                {/* Card 1 */}
                <div className="col-md-4">
                <div className="custom-card">
                    <img src={dev} alt="Web Design Icon" />
                    <h5 className='text'>Web Design</h5>
                    <p className='text'>
                    We create visually stunning, user-friendly website designs that
                    reflect your brand identity and engage your audience effectively.
                    </p>
                </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                <div className="custom-card">
                    <img src={web} alt="Web Development Icon" />
                    <h5 className='text'>Web Development</h5>
                    <p className='text'>
                    Our web development services deliver robust, scalable, and secure
                    websites tailored to your specific business needs.
                    </p>
                </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                <div className="custom-card">
                    <img src={dev} alt="Mobile App Development Icon" />
                    <h5 className='text'>Mobile App Development</h5>
                    <p className='text'>
                    We build intuitive, high-performance mobile apps that provide
                    seamless user experiences across iOS and Android platforms.
                    </p>
                </div>
                </div>
                </div>
              </div>
              <div className='row justify-content-center mb-5 mt-5'>
                  <div className='col-md-3 mb-5'>
                  <button className="btn button5 text-white btn-lg btn-rounded ">SEE MORE</button>
                  </div>
                  
             </div>
             
             
              
              
        </div>


     </>
  )
}

export default Services