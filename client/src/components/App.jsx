import React from 'react'
import CounselingTypesList from './CounselingTypesList.jsx'
import AboutMe from './AboutMe.jsx'
import Reviews from './Reviews.jsx'
import ContactInfo from './ContactInfo.jsx'

const App = () => {

  return (
    <div>

      <div className="main">
        <h1>Growth & Empowerment Life Coaching</h1>
        <div>
          <h1> Welcome! </h1>
        </div>
        <CounselingTypesList />
        <AboutMe />
        <Reviews />
        {/* <ContactInfo /> */}
      </div>

    </div>
  )
}

export default App