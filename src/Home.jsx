// Install dependencies: npm install react-router-dom emailjs-com
import React from 'react';
import emailjs from 'emailjs-com';

function Home() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hx0voiv', 
        'template_3innkvh',
        e.target,
        'hNtAss1MeUKC0tntL' 
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email: ' + error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="page">
      <h1>Welcome to Our Website</h1>
      <p>Fill out the form below to contact us:</p>
      <form onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" required />
        </div>
        <div className="form-group">
          <label>Doubt:</label>
          <textarea name="doubt" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send</button>
      </form>
    </div>
  );
}

export default Home;