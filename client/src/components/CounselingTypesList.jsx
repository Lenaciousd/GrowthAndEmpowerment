import React from 'react'

const CounselingTypesList = () => {

  const types = [
  {
    name: 'Relationship Counseling',
    description: 'Strengthen your bond with others by building an emotional awareness, communicating more effectively, and creating positive boundaries. Work through difficult feelings you have about your spouse, friend, co-worker, or child by improving confidence, self-esteem, kindness, compassion, and an understanding of yourself and others.',
    color:'lightcoral',
    img: '/assets/childWithParent.jpg'
  },
  {
    name: 'Health & Wellness Counseling',
    description: 'Make a wellness plan that works for you. Create goals and build positive habits that will nourish your mind, body, and emotions. Find ways to eat foods that make your body feel good, discuss meal prep, healthy options & recipes, macronutrient ratios, calorie counting, etc… or Find fun ways to move, increase physical activity and develop a cardio and strength training schedule. Find time to calm your mind and relieve stress with bedtime routines, hobbies, meditation techniques, and gratitude practices.',
    color:'seagreen',
    img: '/assets/healthyFood.jpg'
  },
  {
    name: 'Education & Career Counseling',
    description: 'Reflect on your interests, values, and purpose in life. Clarify your education and career goals. Figure out what’s important to you and what steps are needed to make your life more fulfilling and meaningful. Whether it\'s furthering your education, a career change, or reigniting the spark of passion at work, you will create goals and take those first steps to make it happen.',
    color:'goldenrod',
    img: '/assets/graduation.jpg'
  },
  {
    name: 'Mindfulness, Meditation, & Reflection',
    description: 'Incorporate more mindfulness into your daily activities. Explore and deepen your meditation practice. Create goals that will help you find space to reflect on where you are and how you feel at this time in your life. Become more aware of how you are living. Discover ways to be more in touch with your inner self (motivations, values, meaning of life, etc).',
    color:'cadetblue',
    img: '/assets/meditation.jpg'
  }
]

 const counselingType = types.map((type, index) => {
   return <div key={index} className="coachingType" > <img className="counselingPic" src={type.img} /> <h2>{type.name}</h2> <p>{type.description}</p> </div>
 })

  return (
    <div className="CounselingOptions">
    {counselingType}
    </div>
  )
}

export default CounselingTypesList