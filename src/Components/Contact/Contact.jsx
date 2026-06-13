import React from 'react'
import './Contact.css';
import  msg_icon from '../../assets/msg-icon.png';
import  phone_icon from '../../assets/phone-icon.png';
import  mail_icon from '../../assets/mail-icon.png';
import  location_icon from '../../assets/location-icon.png';
import  white_arrow from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "95b2e3f4-1ada-4132-869d-2036d60f30d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact" id="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
             <p>
          We'd love to hear from you! Whether you have a question about our
          services, need assistance, or just want to share your feedback,
          feel free to get in touch with us.
        </p>
         <ul>
          <li><img src={phone_icon} alt="Phone Icon" /> +91 7676998338</li>
          <li><img src={mail_icon} alt="Mail Icon" /> shaheedafreed76@gmail.com</li>
          <li><img src={location_icon} alt="Location Icon" />BTM Layout Madiwala, Bengaluru, Karnataka, India</li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" id="name" name="name" required placeholder="EnterYour Name"/>
                <label>Phone Number</label>
                <input type="tel" id="phone" name="phone" required placeholder="Enter Your Phone Number"/>
               
                <label >Write YourMessage Here</label>
                <textarea id="message" name="message" rows="6"  required placeholder="Enter Your Message" required></textarea>
                <button type="submit" className="btn dark-btn">Send Message <img src={white_arrow} alt="White Arrow" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact