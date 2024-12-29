import logo from "../assets/logo.png";
import './footer.css'

const Footer = () => {
  return (
    <footer className="text-center text-lg-start custom-footer text-white">
      {/* Social Media Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-white">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>

      {/* Footer Links Section */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">COMPUTER COOL</h6>
              <img src={logo} style={{ width: '100%', height: '40%' }} />
              <p className="mt-2">
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            {/* Services */}
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">SERVICES</h6>
              <p>
                <a href="#!" className="text-reset text-white">Web Design</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Web Development</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Mobile Application Development</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Corporate Training Programs</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">Product Design Consultancy</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-white">IT Consult</a>
              </p>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Vikram-Baug Colony</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +91 96 244 38565</p>
              <p><i className="fas fa-print me-3"></i> +91 94 087 88205</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Copyright */}
      <div className="text-center p-4">
        © 2024 Copyright:
        <a className="text-reset fw-bold text-white" href="">computercool.com</a>
      </div>
    </footer>
  );
};

export default Footer;
