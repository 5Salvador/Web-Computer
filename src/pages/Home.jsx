import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/home.css'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
    });
  }, []);
   
    return (
      <>
        <section className='background'>
          <div className="container mt-5" >
            <h2 className="text-center text-black" data-aos="fade-left" data-aos-delay="200">
              <b>Hello, Welcome to Computer Cool India</b>
            </h2>
            <div className="row justify-content-center" data-aos="fade-left" data-aos-delay="200">
              <div className="col-md-8 mt-3">
                <p className="text-center">
                  Computer Cool India is one of the fastest growing IT companies in Gujarat, serving clients across India and abroad. We broadly specialise in Software Development, Website-Designing, Digital Marketing solutions, and Training.
                </p>
                <p>Computer Cool is a leading software company specializing in innovative technology solutions. We deliver cutting-edge web design, development, and mobile app services tailored to meet client needs. Our expertise extends to IT consulting, corporate training programs, and product design consultancy. Committed to excellence, we empower businesses with user-friendly, scalable, and secure digital solutions for a competitive edge in the industry.</p>
              </div>
            </div>
            <div className="row justify-content-center text-center mt-5" data-aos="fade-right" data-aos-delay="200">
              <div className="col-sm-3 d-flex flex-column align-items-center">
                <i className="bi bi-person-circle" style={{ fontSize: '7rem' }}></i>
                <h1 className="numbers">
                  <b>70+</b>
                            </h1>
                           <h2>Team members</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                <i className="bi bi-tv" style={{ fontSize: '7rem' }}></i>
                <h1 className="numbers">
                  <b>50+</b>
                            </h1>
                           <h2>Projects</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                <i className="bi bi-trophy" style={{ fontSize: '7rem' }}></i>
                <h1 className="numbers">
                  <b>90%</b>
                            </h1>
                            <h2 >Success Rate</h2>
              </div>
              <div className="col-sm-3 d-flex flex-column align-items-center">
                <i className="bi bi-people-fill" style={{ fontSize: '7rem' }}></i>
                <h1 className="numbers">
                  <b>9+</b>
                            </h1>
                            <h2>Team members</h2>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Home;
  