import  { useEffect } from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../../animations/index.js';
import logo from '../../assets/logo.png'

export const PreLoader = () => {

      useEffect(()=>{
        preLoaderAnim()
      },[]);


  return (
    
    <div className='container'>
      <div className='row justify-content-center'>
      <div className="preloader">
      <div className="logo-container">
          <img src={logo} alt="" className='logo1' />
       </div>
       
          <div className="texts-container text-center">
            <span>Software Development Company</span>
        </div>
    </div>

      </div>
      

    </div>   
    
    
  )
}
