import React, { useState } from 'react'
import { Review } from '../api.js'

const ReviewsListItem = ({ review, isEditing, setIsEditing, getReviews }) => {
  const [editedDescription, setEditedDescription] = useState('')
  const description = review.description || 'Amazing!'
  const category = review.category || 'Relationship'
  const age = review.age || '20s'
  const gender = review.gender || 'Male'

  const handleDelete = (e) => {
    e.preventDefault()
    Review.destroy(review.id)
      .then((data) => {
        getReviews()
      })
      .catch((err) => {
        console.log('could not delete review ', err)
      })
  }

  const handleEdit = (e) => {
    e.preventDefault()
    console.log('in Handle edit' , editedDescription)
    Review.update(review.id, { description: editedDescription })
      .then((data) => {
        getReviews()
        setIsEditing(false)
      })
      .catch((err) => {
        console.log('could not edit review ', err)
      })
  }
  const deleteButton = <button onClick={handleDelete}>Delete</button>
  const submitEditButton = <button onClick={handleEdit}>Submit</button>
  return (
    <div className="review">
      <div>
        {
          isEditing === review.id
            ? <textarea className="editingTextArea" value={editedDescription} onChange={(e) => { setEditedDescription(e.target.value) }} />
            : (
              <p onClick={() => {
                setIsEditing(review.id);
                setEditedDescription(description);
                console.log('you clicked ', review.id, description)
              }}>
                {description}
              </p>
            )
        }
      </div>
      {category} Counseling | {age} | {gender} |   {isEditing === review.id ? submitEditButton : deleteButton}
    </div>
  )
}


export default ReviewsListItem