import React from 'react';
import './styles/contact.css';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_APP_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error:", data);
        setResult(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="contact" data-aos="fade-left">
          <b><u>Contact</u> Us</b>
        </h1>
        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-md-4">
            <div className="custom-card">
              <h4>Get in touch with us</h4>
              <p><b>OFFICE</b></p>
              <p><b>Vadodara</b>: Fatehgunj</p>
              <p><b>Email:</b> computer12@gmail.com</p>
              <p>+91 96 244 38565</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3><b>Send us your message</b></h3>
            <p>
              Looking forward to connecting with us? In case of any concerns, business queries, or service requirements, 
              Computer Cool India would be happy to hear from you. We assure you of our response within 24 hours.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <form onSubmit={onSubmit}>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" placeholder="Full name" className="form-control" name="name" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" placeholder="Email address" className="form-control" name="email" required />
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-md-4">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="text" placeholder="Phone number" className="form-control" name="phone" required />
              </div>
              <div className="col-md-4">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" placeholder="Subject" className="form-control" name="subject" required />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 mt-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea name="message" placeholder="Type your message here" className="form-control" rows="6" required></textarea>
                <button type="submit" className="btn btn-lg btn-rounded button2 btn-primary mt-4">Send</button>
              </div>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
