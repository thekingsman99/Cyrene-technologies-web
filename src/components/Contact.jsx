import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section bg-alt">
      <div className="container contact-container">
        <div className="contact-info">
          <h2 className="section-title" style={{textAlign: 'left'}}>Get in Touch</h2>
          <div className="title-underline" style={{margin: '0 0 2rem 0'}}></div>
          <p className="contact-desc">
            Ready to upgrade your technology infrastructure or integrate Cyrene AI into your business? Contact us today.
          </p>
          <ul className="info-list">
            <li>
              <span className="info-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Plot35/F401a, Lilayi Road, Lusaka, Zambia</p>
              </div>
            </li>
            <li>
              <span className="info-icon">📞</span>
              <div>
                <strong>Phone Numbers</strong>
                <p>+260972383017 <br/> +260760767739</p>
              </div>
            </li>
            <li>
              <span className="info-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>andrewmwape@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="contact-form-wrapper glass-card">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Send us a message</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="How can we help?" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Your message here..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
