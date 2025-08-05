import React, { useState } from 'react';
import './Contact.css'; 
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        name: name,
        email: email,
        message: message
      });
      console.log(response.data);
      setName('');
      setEmail('');
      setMessage('');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Av's Furniture Shop</h2>
        <p>
          Have questions or need assistance? Feel free to get in touch with us. Our dedicated team is here to help you with all your furniture-related inquiries.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Visit Us</h3>
              <p>123 Furniture Street, Cityville, State, ZIP</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Call Us</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
            <div className="text">
              <h3>Email Us</h3>
              <p>info@avs-furniture.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>
            <div className="inputBox">
              <input type="text" value={name} onChange={handleChange} name="name" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" value={email} onChange={handleChange} name="email" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea value={message} onChange={handleChange} name="message" required />
              <span>Type Your Message...</span>
            </div>
            {error && <div className="error">{error}</div>}
            <div className="inputBox">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
