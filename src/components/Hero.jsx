import { useEffect } from "react";
import computer from "../assets/computer.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css'

const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
        });
      }, []);
  return (
      <>
          <div className='container'>
              <div className='row justify-content-center'>
                  <div className="col-md-6 align-content-center">
                      <h1 className="cssanimation hu__hu__ text-primary"><b>Empowering<br />
                          Your Tech<br />
                          Journey
                      </b></h1>
                      <div>
                      <button className="btn btn-primary btn-rounded mt-4 btn-lg button1">Learn More</button>
                      </div>
                      
                      
                  </div>
                  <div className="col-md-6" data-aos="fade-left" data-aos-delay="2900">
                      <img src={computer} className="img-fluid" alt="" />
                      
                  </div>
                  
              </div>
          </div>
      </>
  )
}

export default Hero