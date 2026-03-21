import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="logo">Cyrene <span className="logo-accent">Technologies</span></h2>
          <p>Innovative, Secure, and Accessible Technology Solutions</p>
          <p className="motto">"MAKE TECH GREAT AGAIN"</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Industries Served</h4>
            <ul>
              <li>Government & Public Sector</li>
              <li>Corporate & Private</li>
              <li>SMEs & Startups</li>
              <li>NGOs & Communities</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>andrewmwape@gmail.com</li>
              <li>+260972383017</li>
              <li>+260760767739</li>
              <li>Plot35/F401a, Lilayi Road, Lusaka, Zambia</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom glass">
        <p>&copy; {new Date().getFullYear()} CYRENE TECHNOLOGIES LIMITED. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
