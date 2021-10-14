import axios from 'axios'

export const Review = {
  list: () => {
    return axios({
      method: 'get',
      url: '/reviews',
      dataType: 'json'
    })
  },

  create: (review) => {
    return axios({
      method: 'post',
      url: '/reviews',
      data: {
        description: review.description,
        category: review.category,
        age: review.age,
        gender: review.gender
      },
      dataType: 'json'
    })
  },

  update: (id, review) => {
    return axios({
      method: 'put',
      url: '/reviews/' + id,
      data: review,
      dataType: 'json'
    })
  },

  destroy: (id) => {
    return axios({
      method: 'delete',
      url: '/reviews/' + id,
      dataType: 'json'
    })
  }
}