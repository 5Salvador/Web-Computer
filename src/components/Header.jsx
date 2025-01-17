import './Header.css'

const Header = ({ onScroll }) => {
  return (
      <>
      <nav className="navbar navbar-expand-lg custom-nav fixed-top">
        <div className="container-fluid">
        <h1 className="text-white cool"><b>COMPUTER COOL</b></h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => onScroll('home')}>
              <a className="nav-link active text-white" aria-current="page" href="#home">
            <b>Home</b>
              </a>
            </li>
            <li className="nav-item" onClick={() => onScroll('about')}>
              <a className="nav-link active text-white" href="#about">
              <b>About </b>
              </a>
            </li>
            <li className="nav-item" onClick={() => onScroll('services')}>
              <a className="nav-link active text-white" href="#services">
              <b>Services</b>
              </a>
                </li>
                <li className="nav-item" onClick={() => onScroll('contact')}>
              <a className="nav-link active text-white" href="#contact">
              <b>Contact</b>
              </a>
              </li>
              <li className="nav-item">
              <a className="nav-link active text-white" href="/signup">
              <b>Signup</b>
              </a>
              </li>
          </ul>
           


          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
              
 
       
      </>
  )
}

export default Header