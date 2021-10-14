import React from 'react'
import CounselingTypesList from './CounselingTypesList.jsx'
import AboutMe from './AboutMe.jsx'
import Reviews from './Reviews.jsx'
import ContactInfo from './ContactInfo.jsx'

const App = () => {

  return (
    <div>
      <div className="navBar">
        <h1>Growth & Empowerment Life Coaching</h1>
      </div>

      <div className="main">

        <div className="topInfo">
          <img className="topImg" src="/assets/benchByLake.jpg" />
          <div className="topDescription">
           <p> <h2> Welcome! </h2> </p>

            <p>Thinking about making a change?</p>
            <p>Looking for...</p>
            Support?
            Motivation?
            clarity?
            <p> <h2> Start your journey Today! </h2> </p>

          </div>

        </div>
        <CounselingTypesList />
        <AboutMe />
        <Reviews />
        <ContactInfo />
      </div>

    </div>
  )
}

export default App