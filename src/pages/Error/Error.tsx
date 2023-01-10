import React from 'react'
import { useNavigate } from "react-router-dom"
import "./error.css"

const Error: React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className="error-block">
      <div className="container">
        <div className="error-inner">
          <div className="left">
            <div className="title">
              Error 404
            </div>
            <div className="text">
              The page you requested was not found
            </div>
          </div>
          <div className="right" onClick={() => navigate("/")}>Go to home page</div>
        </div>
      </div>
    </div>
  )
}

export default Error
