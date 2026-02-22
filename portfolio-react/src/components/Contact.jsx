import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In <span>Touch</span></h2>
      <p className="section-subtitle">Have a project in mind? Let&apos;s talk!</p>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Let&apos;s build something great together</h3>
          <p>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="contact-detail">
            <div className="contact-icon">@</div>
            <div>
              <span>john@example.com</span><br />
              <small>Email me anytime</small>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">&#9742;</div>
            <div>
              <span>+1 (555) 123-4567</span><br />
              <small>Mon &ndash; Fri, 9am &ndash; 6pm</small>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-icon">&#9906;</div>
            <div>
              <span>San Francisco, CA</span><br />
              <small>Open to remote work</small>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
