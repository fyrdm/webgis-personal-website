import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <h1>Contact Me</h1>

      <div className="contact-info">
        <p>Feel free to reach out for collaborations or just a friendly chat.</p>
        <p><strong>Email:</strong> hello@alexdeveloper.com</p>
        <p><strong>Location:</strong> San Francisco, CA</p>
        <div className="social-links">
          <a href="#">LinkedIn</a> | <a href="#">GitHub</a> | <a href="#">Twitter</a>
        </div>
      </div>

      <hr style={{ margin: '2rem 0' }} />

      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;