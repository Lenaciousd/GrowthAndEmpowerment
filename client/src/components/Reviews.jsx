import React, { useState, useEffect } from 'react'
import ReviewsListItem from './ReviewsListItem.jsx'
import {Review} from '../api.js'

const Reviews = () => {
  const [reviewCategory, setReviewCategory] = useState('')
  const [reviewDescription, setReviewDescription] = useState('')
  const [reviewGender, setReviewGender] = useState('')
  const [reviewAge, setReviewAge] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(0)
  const [reviewsList, setReviewsList] = useState([{ description: 'review1' }, { description: 'review2' }])
  const [reviewToDelete, setReviewToDelete] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const getReviews = () => {
    Review.list()
      .then((data) => {
        console.log(data.data)
        setReviewsList(data.data)
      })
      .catch((err) => {
        console.log('could not get reviews ', err)
      })
  }

  const updatedReviews = reviewsList.map((review) => {
    return <ReviewsListItem key={review.id} review={review} isEditing={isEditing} setIsEditing={setIsEditing} getReviews={getReviews}/>
  })

  const postNewReview = () => {

   Review.create({
    description: reviewDescription,
    category: reviewCategory,
    age: reviewAge,
    gender: reviewGender
  })
      .then((data) => {
        getReviews()
      })
      .catch((err) => {
        console.log('could not post review ', err)
      })
  }

  useEffect(() => {
    getReviews()
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    postNewReview()
  }

  return (
    <div >

      <form className="reviewForm">
        <h3>Add a Review</h3>
        <div>
          <textarea className="formTextArea" type="textarea" name="reviewDescription" placeholder="Helped me figure out next steps for starting my business" onChange={(e) => { setReviewDescription(e.target.value) }} />
        </div>

        <div>
          <select name="categories" onChange={(e) => { e.preventDefault(); setReviewCategory(e.target.value) }}>
            <option name="Counseling Category" value="">Counseling Category</option>
            <option name="Relationship" value="Relationship">Relationship</option>
            <option name="Health and Wellness" value="Health and Wellness">Health and Wellness</option>
            <option name="Education and Career" value="Education and Career">Education and Career</option>
            <option name="Mindfulness, Meditation, and Reflection" value="Mindfulness, Meditation, and Reflection">Mindfulness, Meditation, and Reflection</option>
          </select>
        </div>

        <div>
          <select name="ages" onChange={(e) => { e.preventDefault(); setReviewAge(e.target.value) }}>
            <option name="Age" value="">Age</option>
            <option name="10-" value="10-">10-</option>
            <option name="Teens" value="Teens">Teens</option>
            <option name="20s" value="20s">20s</option>
            <option name="30s" value="30s">30s</option>
            <option name="40s" value="40s">40s</option>
            <option name="50s" value="50s">50s</option>
            <option name="60+" value="60+">60+</option>
          </select>
        </div>

        <div>
          <select name="genders" onChange={(e) => { e.preventDefault(); setReviewGender(e.target.value) }}>
            <option name="Gender" value="">Gender</option>
            <option name="Non-binary" value="Non-binary">Non-binary</option>
            <option name="Male" value="Male">Male</option>
            <option name="Female" value="Female">Female</option>
            <option name="Other" value="Other">Other</option>
            <option name="Prefer not to say" value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <button type="submit" value="Submit" onClick={handleSubmit}>

          Submit
        </button>

      </form>


      <div className="ReviewsList">
        <h2> Reviews </h2>
        {updatedReviews}
      </div>

    </div>

  )
}

export default Reviews