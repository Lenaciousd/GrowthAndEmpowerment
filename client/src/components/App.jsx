import React from 'react'
import CounselingTypesList from './CounselingTypesList.jsx'
import AboutMe from './AboutMe.jsx'
import Reviews from './Reviews.jsx'

const App = () => {

  return (
  <div>
    <h1>Growth & Empowerment Life Coaching</h1>
    <div>
      <h1> Welcome! </h1>
    </div>
    <CounselingTypesList />
    <AboutMe />
    <Reviews />
  </div>
  )
}

export default App