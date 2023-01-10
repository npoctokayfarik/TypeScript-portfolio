import React from 'react'
import {  BsInstagram, BsTelegram, BsGithub } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <Link to='/' className="footer-logo">MyPortfolio</Link>
          <div className="footer-media-service">
            <a href="#">
              <BsInstagram />
              Instagram
            </a>
            <a href="#">
              <BsTelegram />
              Telegram
            </a>
            <a href="#">
              <BsGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
