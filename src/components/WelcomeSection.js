import React, { useRef } from 'react'
import sunIcon from '../assets/icon-sun.svg'
import moonIcon from '../assets/icon-moon.svg'
const WelcomeSection = ({ timeData, visitorIP, expandSection, isExpanded }) => {
  // console.log(timeData)
  // console.log(visitorIP)
  const arrow = useRef()

  const toggleArrowDirection = () => {
    // console.log(arrow.current)
    arrow.current.classList.toggle("arrow-down")
    expandSection();
  }



  return (
    <div className={`welcome-section ${isExpanded? "expanded": ""}`}>
      <div className="container welcome-container">
        <div className="col">
        <div className="header">
          <img src={timeData.isMorning ? sunIcon: moonIcon} className="icon" alt="refresh icon" />
          <h4>Good {timeData.isMorning ? "morning" : "evening"}, It's currently</h4>
        </div>
          <h1>{timeData.datetime}<span className="light">{ timeData.zone}</span></h1>
          <h3>In {visitorIP.city}, {visitorIP.region_code}</h3>
      </div>
      <div className="col button-col">
          <button className="button" onClick={toggleArrowDirection}>{isExpanded? "less": "more"}
             <span className="arrow-circle arrow-top" ref={arrow} ></span>
          </button>
      </div>
      
      </div>
      
    </div>
  )
}

export default WelcomeSection
