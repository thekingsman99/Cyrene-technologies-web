import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate 3D shatter grid
  const gridSize = 6;
  const pieces = [];
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const xOffset = j - (gridSize / 2 - 0.5);
      const yOffset = i - (gridSize / 2 - 0.5);
      const distance = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
      
      // Anchor tiles roughly corresponding to Africa (center grid blocks)
      const isAfrica = (i >= 2 && i <= 3) && (j >= 2 && j <= 3);
      
      // Calculate a staggered delay so they break one after the other
      const sequenceIndex = i * gridSize + j;
      const delay = sequenceIndex * 15; // 15px scroll delay per piece
      
      const explodeFactor = isAfrica ? 0 : Math.max(0, (scrollPos - delay) * 0.4); // Speed of dispersal
      
      const transform = `
        translate3d(${xOffset * explodeFactor * 1.5}px, ${yOffset * explodeFactor * 1.5}px, ${distance * explodeFactor * 2}px)
        rotateX(${yOffset * explodeFactor * 0.2}deg)
        rotateY(${xOffset * explodeFactor * 0.2}deg)
      `;
      
      pieces.push(
        <div 
          key={`${i}-${j}`} 
          className="shatter-piece"
          style={{
            backgroundPosition: `${(j / (gridSize - 1)) * 100}% ${(i / (gridSize - 1)) * 100}%`,
            backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
            transform: transform,
            opacity: isAfrica ? 1 : Math.max(0, 1 - ((scrollPos - delay) / 600)),
            zIndex: isAfrica ? 10 : 1 // Keep Africa over shattering pieces
          }}
        ></div>
      );
    }
  }

  return (
    <div className="home-page">
      {/* 3D Scroll Hero Section */}
      <section className="hero-section">
        <div className="shatter-container">
          {pieces}
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">
            Innovative, Secure, and Accessible <br />
            <span className="text-gradient">Technology Solutions</span>
          </h1>
          <p className="hero-motto">"MAKE TECH GREAT AGAIN"</p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="about-section">
        <div className="container about-content">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <div className="title-underline"></div>
            <p>
              <strong>CYRENE TECHNOLOGIES LIMITED</strong> aims to deliver the highest quality end-to-end ICT solutions that help businesses operate more efficiently, securely, and profitably. We specialize in IT infrastructure, software & AI solutions, cybersecurity, digital solutions, and payment gateway services.
            </p>
            <p className="highlight-box glass-card">
              We simplify technology, improve revenue collection, and support business growth with practical, scalable, and secure solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section id="vision-mission" className="vm-section bg-alt">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card glass-card">
              <div className="icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To be the number one trusted technology partner delivering innovative digital solutions.</p>
            </div>
            <div className="vm-card glass-card">
              <div className="icon">🚀</div>
              <h3>Our Mission</h3>
              <p>To provide secure, affordable, and high-quality ICT solutions that enhance operations, enable digital payment collection, protect systems, and support business growth.</p>
            </div>
          </div>
          
          <div className="values-container">
            <h3 className="values-title">Core Values</h3>
            <div className="values-list">
              <span className="value-item">Professionalism</span>
              <span className="value-separator">•</span>
              <span className="value-item">Innovation</span>
              <span className="value-separator">•</span>
              <span className="value-item">Reliability</span>
              <span className="value-separator">•</span>
              <span className="value-item">Client Focus</span>
              <span className="value-separator">•</span>
              <span className="value-item">Security & Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Delivering high quality, following the principles of design to ensure the best for our clients.</p>
          
          <div className="services-grid">
            <div className="service-card glass-card">
              <div className="service-icon">🖥️</div>
              <h3>IT Infrastructure & <br/>Computer Solutions</h3>
              <ul>
                <li>Supply of ICT equipment, servers, & desktops</li>
                <li>Network setup (LAN & WAN)</li>
                <li>Maintenance & technical support</li>
              </ul>
              <div className="service-benefits">
                <strong>Benefits:</strong> Stable, secure, and efficient IT environments with reduced downtime.
              </div>
            </div>
            
            <div className="service-card glass-card">
              <div className="service-icon">💻</div>
              <h3>Software Development & <br/>Digital Solutions</h3>
              <ul>
                <li>Custom software solutions</li>
                <li>Website and mobile app development</li>
                <li>Business process automation & reporting tools</li>
              </ul>
              <div className="service-benefits">
                <strong>Benefits:</strong> Streamlined operations and better customer engagement.
              </div>
            </div>

            <div className="service-card glass-card">
              <div className="service-icon">🤖</div>
              <h3>AI & Automation <br/>Solutions</h3>
              <ul>
                <li>AI-powered Chatbots and virtual assistants</li>
                <li>Robotic Process Automation (RPA)</li>
                <li>Integration with software and web apps</li>
              </ul>
              <div className="service-benefits">
                <strong>Benefits:</strong> Reduced manual work, faster processes, and scalable growth.
              </div>
              <a href="/ai" className="btn btn-outline" style={{marginTop: '1rem', width: '100%'}}>Learn more about Cyrene AI</a>
            </div>

            <div className="service-card glass-card">
              <div className="service-icon">🔒</div>
              <h3>Cybersecurity <br/>Solutions</h3>
              <ul>
                <li>Network security & endpoint protection</li>
                <li>Security audits & penetration testing</li>
                <li>Incident response & firewalls</li>
              </ul>
              <div className="service-benefits">
                <strong>Benefits:</strong> Safe systems, regulatory compliance, and business continuity.
              </div>
            </div>
            
            <div className="service-card glass-card">
              <div className="service-icon">📊</div>
              <h3>IT Consulting & <br/>Business Support</h3>
              <ul>
                <li>IT advisory & digital transformation support</li>
                <li>System upgrades & project coordination</li>
                <li>User training</li>
              </ul>
            </div>
            
            <div className="service-card glass-card">
              <div className="service-icon">🌐</div>
              <h3>Digital & Online <br/>Solutions</h3>
              <ul>
                <li>E-commerce platforms</li>
                <li>Digital marketing & content creation</li>
                <li>Digital strategy & branding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Delivery Approach Section */}
      <section id="approach" className="approach-section bg-alt">
        <div className="container">
          <h2 className="section-title">Service Delivery Approach</h2>
          <p className="section-subtitle">A proven methodology for scalable success.</p>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content glass-card">
                <h4>Assessment</h4>
                <p>Understand client needs</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content glass-card">
                <h4>Solution Design</h4>
                <p>Tailored, scalable systems</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content glass-card">
                <h4>Implementation</h4>
                <p>Professional deployment</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content glass-card">
                <h4>Testing & Training</h4>
                <p>Ensure maximum usability</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content glass-card">
                <h4>Support & Maintenance</h4>
                <p>Continuous assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Industries Section */}
      <section className="why-us-section">
        <div className="container">
          <div className="two-col-layout">
            <div className="why-us-content">
              <h2 className="section-title" style={{textAlign: 'left'}}>Why Choose Cyrene Technologies</h2>
              <div className="title-underline" style={{margin: '0 0 2rem 0'}}></div>
              <ul className="feature-list">
                <li>Comprehensive solutions under one provider</li>
                <li>Skilled, experienced, and client-focused team</li>
                <li>Secure, scalable, and reliable systems</li>
                <li>Strong expertise in AI, digital payments, and automation</li>
                <li>Reliable after-sales support and long-term partnerships</li>
              </ul>
              
              <div className="commitment-box glass-card bg-alt" style={{marginTop: '3rem'}}>
                <h4 style={{color: 'var(--color-primary-dark)', marginBottom: '1rem'}}>Commitment to Quality & Security</h4>
                <p>We follow industry best practices to ensure data protection, system security, and service excellence.</p>
              </div>
            </div>
            
            <div className="industries-content">
              <h2 className="section-title" style={{textAlign: 'left'}}>Industries Served</h2>
              <div className="title-underline" style={{margin: '0 0 2rem 0'}}></div>
              <div className="industries-grid">
                <div className="industry-box glass-card">🏢 Government & Public Institutions</div>
                <div className="industry-box glass-card">💼 Corporate & Private Sector</div>
                <div className="industry-box glass-card">🏪 Small & Medium Enterprises (SMEs)</div>
                <div className="industry-box glass-card">🚀 Informal Traders & Startups</div>
                <div className="industry-box glass-card">🤝 NGOs & Community Orgs</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
