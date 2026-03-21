import { useEffect, useState } from 'react';
import './CyreneAI.css';

const CyreneAI = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxTransform = `
    perspective(1000px) 
    translateZ(${scrollPos * -0.2}px) 
    translateY(${scrollPos * 0.4}px)
  `;

  return (
    <div className="ai-page">
      {/* 3D Scroll Hero Section for AI */}
      <section className="ai-hero-section">
        <div 
          className="ai-hero-bg"
          style={{ transform: parallaxTransform }}
        ></div>
        <div className="ai-hero-content container">
          <div className="ai-badge">CYRENE AI PLATFORM</div>
          <h1 className="hero-title ai-title">
            The Future is <span className="text-gradient">Automated</span>
          </h1>
          <p className="hero-motto">"Never miss a new client with AI-powered accessibility."</p>
          <div className="hero-actions">
            <a href="#ai-services" className="btn btn-primary">Explore Capabilities</a>
          </div>
        </div>
      </section>

      {/* AI Services Highlights */}
      <section id="ai-services" className="ai-services-section bg-alt">
        <div className="container">
          <h2 className="section-title">Core AI Solutions</h2>
          <div className="title-underline"></div>
          
          <div className="ai-grid">
            <div className="ai-feature-card glass-card">
              <div className="ai-icon">💬</div>
              <h3>AI-powered Chatbots & <br/>Virtual Assistants</h3>
              <p>Engage your customers 24/7. Use AI to ensure you never miss out on new clients, answering queries instantly naturally.</p>
            </div>
            
            <div className="ai-feature-card glass-card">
              <div className="ai-icon">⚙️</div>
              <h3>Robotic Process <br/>Automation (RPA)</h3>
              <p>Automate repetitive administrative tasks. Reduce the need for excess manual labor and save incredible amounts of time.</p>
            </div>

            <div className="ai-feature-card glass-card">
              <div className="ai-icon">📈</div>
              <h3>Workflow Automation & <br/>AI-driven Analytics</h3>
              <p>Gain actionable insights from your data. We integrate AI seamlessly with your existing software, web, and mobile apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ai-benefits-section">
        <div className="container">
          <div className="benefits-layout glass-card">
            <div className="benefits-text">
              <h2 className="section-title" style={{textAlign: 'left'}}>Transform Your Business</h2>
              <div className="title-underline" style={{margin: '0 0 2rem 0'}}></div>
              <ul className="benefit-list">
                <li><span>⏳</span> <strong>Reduced Manual Work:</strong> Free up your team to focus on high-value strategic tasks.</li>
                <li><span>⚡</span> <strong>Faster Processes:</strong> Execute operations at machine speed with perfect accuracy.</li>
                <li><span>🧠</span> <strong>Improved Decision-Making:</strong> Leverage predictive analytics for smarter business choices.</li>
                <li><span>📈</span> <strong>Scalable Growth:</strong> Handle increased customer volume without proportionally increasing headcount.</li>
              </ul>
            </div>
            <div className="benefits-cta">
              <h3>Ready to Upgrade?</h3>
              <p>Integrate Cyrene AI into your business today.</p>
              <button className="btn btn-primary" style={{width: '100%'}}>Contact Our AI Team</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyreneAI;
