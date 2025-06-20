import React from "react";
import { Link } from "react-router-dom";
import CICDXSEOHead from "./CICDXSEOHead";

const CICDX = () => {
  return (
    <>
      <CICDXSEOHead />
      <div className="container">
        <div className="tokyo_tm_services">
          {/* Hero Section */}
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <img 
                    src="/assets/img/logo/cicdx/CICDX logo_A2.png" 
                    alt="CICDX Logo" 
                    style={{
                      height: '130px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>
                <h3>What is CICDX?</h3>
              </div>
            </div>
          </div>

          {/* Main Introduction */}
          <div className="tokyo_tm_about_text" style={{ marginBottom: '30px' }}>
            <h4>Your CI/CD Automation Solution</h4>
            <p>
              CICDX automatically translates CI/CD pipelines between different platforms. 
              Move from Jenkins to GitHub Actions, GitLab to CircleCI, or any combination 
              in minutes—not months.
            </p>
            <div style={{ marginTop: '20px' }}>
              <span style={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '15px',
                fontWeight: 'bold',
                fontSize: '14px',
                marginRight: '15px'
              }}>
                50% Faster Migration
              </span>
              <span style={{ fontSize: '14px', opacity: '0.8' }}>
                Join 100+ teams in Early Access
              </span>
            </div>
          </div>

          {/* Video Section */}
          <div className="tokyo_tm_about_text" style={{ marginBottom: '40px' }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '15px',
              padding: '30px',
              textAlign: 'center'
            }}>
              <video 
                controls 
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  borderRadius: '10px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
                }}
                poster="/assets/img/cicdx-poster.jpg"
              >
                <source src="/assets/videos/what is cicdx.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p style={{ 
                fontSize: '14px', 
                marginTop: '15px', 
                opacity: '0.7' 
              }}>
                Watch: How CICDX transforms your CI/CD workflow
              </p>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '20px'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(255, 107, 107, 0.1)', 
                padding: '25px', 
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid rgba(255, 107, 107, 0.2)'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>⚡</div>
                <h4 style={{ color: '#ff6b6b', marginBottom: '12px', fontSize: '18px' }}>Minutes Not Months</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.5', opacity: '0.9' }}>
                  Migrate 100 repositories in minutes with automated pipeline translation
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: 'rgba(76, 175, 80, 0.1)', 
                padding: '25px', 
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid rgba(76, 175, 80, 0.2)'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>💰</div>
                <h4 style={{ color: '#4caf50', marginBottom: '12px', fontSize: '18px' }}>Massive Savings</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.5', opacity: '0.9' }}>
                  Save thousands in engineering costs and hundreds of work hours
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: 'rgba(33, 150, 243, 0.1)', 
                padding: '25px', 
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px solid rgba(33, 150, 243, 0.2)'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '15px' }}>🎯</div>
                <h4 style={{ color: '#2196f3', marginBottom: '12px', fontSize: '18px' }}>Zero Errors</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.5', opacity: '0.9' }}>
                  Automated translation ensures consistent, error-free configurations
                </p>
              </div>
            </div>
          </div>

          {/* Real-World Example */}
          <div className="tokyo_tm_about_text" style={{ marginBottom: '40px' }}>
            <h3>Real Example: 100 Jenkins Repos → Azure Pipelines</h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '20px',
              marginTop: '20px'
            }}>
              <div style={{ 
                backgroundColor: 'rgba(255, 107, 107, 0.1)', 
                padding: '25px', 
                borderRadius: '12px',
                borderLeft: '4px solid #ff6b6b'
              }}>
                <h4 style={{ color: '#ff6b6b', marginBottom: '15px' }}>❌ Manual Migration</h4>
                <ul style={{ lineHeight: '1.8', fontSize: '15px', listStyle: 'none', padding: 0, margin: 0 }}>
                  <li>• 3-6 months timeline</li>
                  <li>• High risk of errors</li>
                  <li>• $50k+ in costs</li>
                  <li>• Team burnout</li>
                </ul>
              </div>
              
              <div style={{ 
                backgroundColor: 'rgba(76, 175, 80, 0.1)', 
                padding: '25px', 
                borderRadius: '12px',
                borderLeft: '4px solid #4caf50'
              }}>
                <h4 style={{ color: '#4caf50', marginBottom: '15px' }}>✅ CICDX Migration</h4>
                <ul style={{ lineHeight: '1.8', fontSize: '15px', listStyle: 'none', padding: 0, margin: 0 }}>
                  <li>• 2-3 weeks timeline</li>
                  <li>• Automated accuracy</li>
                  <li>• $15k in costs</li>
                  <li>• Team focused on value</li>
                </ul>
              </div>
            </div>
            
            <div style={{ 
              textAlign: 'center', 
              marginTop: '20px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#4caf50',
              padding: '15px',
              backgroundColor: 'rgba(76, 175, 80, 0.1)',
              borderRadius: '8px'
            }}>
              Result: 50% faster, 70% cost reduction
            </div>
          </div>

          {/* Supported Platforms */}
          <div className="tokyo_tm_about_text" style={{ marginBottom: '40px' }}>
            <h3>Supported CI/CD Platforms</h3>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '20px'
            }}>
              {['Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'CircleCI', 'Azure Pipelines', 'TeamCity'].map(platform => (
                <span key={platform} style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '500',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="list">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="title">
                    <h3>🔄 Intelligent Translation</h3>
                  </div>
                  <div className="text">
                    <p>
                      AI-powered pipeline analysis that understands context and preserves 
                      functionality while optimizing for target platforms.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="title">
                    <h3>⚡ Batch Processing</h3>
                  </div>
                  <div className="text">
                    <p>
                      Process hundreds of repositories simultaneously with parallel execution 
                      and real-time progress tracking.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="title">
                    <h3>🔍 Validation & Testing</h3>
                  </div>
                  <div className="text">
                    <p>
                      Built-in validation ensures generated pipelines work correctly before 
                      deployment with comprehensive testing frameworks.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="title">
                    <h3>📊 Migration Analytics</h3>
                  </div>
                  <div className="text">
                    <p>
                      Detailed reports on migration progress, cost savings, and performance 
                      improvements with actionable insights.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="title">
                    <h3>🌐 Global Enterprise Scale</h3>
                  </div>
                  <div className="text">
                    <p>
                      Trusted by 100+ teams worldwide for enterprise-grade migrations. 
                      Scalable architecture handles organizations of any size with 
                      proven reliability and security standards.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="title">
                    <h3>🎯 Zero-Hassle Automation</h3>
                  </div>
                  <div className="text">
                    <p>
                      Eliminate CI/CD migration headaches with intelligent automation. 
                      Our platform handles complex configurations automatically, 
                      so your team can focus on delivering value instead of manual tasks.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="tokyo_tm_about_text" style={{ 
            marginTop: '40px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            padding: '30px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 107, 107, 0.2)'
          }}>
            <h3 style={{ 
              marginBottom: '15px',
              fontSize: '24px',
              color: '#ff6b6b'
            }}>
              Ready to Transform Your CI/CD?
            </h3>
            <p style={{ 
              fontSize: '16px', 
              marginBottom: '25px',
              lineHeight: '1.6'
            }}>
              Join 100+ teams already using CICDX to automate their pipeline migrations. 
              See how you can save months of work and thousands in costs.
            </p>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ 
                backgroundColor: '#ff6b6b',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '25px',
                fontWeight: 'bold',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                Get Early Access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CICDX;