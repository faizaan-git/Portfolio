import { StrictMode } from 'react'
import './contact.css'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'


function contact() {  return (
    <div className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Contact.</h1>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/mohammed-faizaan-shariff-80ab7b421/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={linkedin} alt="LinkedIn"></img>
        </a>
        <a href="https://github.com/Faizaan-git" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src={github} alt="GitHub"></img>
        </a>
      </div>
      <div className="contact-info">
        <p className="contact-text">Feel free to reach out!</p>
        <p className="contact-text">
          Email: <a href="mailto:faizaan.desk@gmail.com" className="contact-link">faizaan.desk@gmail.com</a>
        </p>
      </div>
    </div>)}
export default contact
