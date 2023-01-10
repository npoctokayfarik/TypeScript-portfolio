import React from 'react'
import { useNavigate} from "react-router-dom"
import "./home.css"

const Home: React.FC = () => {

  const navigate = useNavigate()

  return (
    <div className="home-block">
      <div className="container">
        <div className="home-inner">  
          <div className="home-inner-block__left">
            <div className="left-title">Say Hello</div>
            <div className="left-text">My name is Nurlan</div>
          </div>
          <div className="home-inner-block__right" onClick={() => navigate("/about")}>Go to about page</div>
        </div>
      </div>
    </div>
  )
}

export default Home
