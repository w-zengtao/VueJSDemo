import * as types from './mutation-types'
import api from '../api'
import models from '../models'

// Object.assign

export default {
  [types.DEC_TOTAL_TIME] (state, subTotalTime) {
    state.totalTime -= subTotalTime
  },
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1);
  },
  [types.SAVE_PLAN] (state, plan) {
    state.list.push(plan)
  },
  [types.ADD_TOTAL_TIME] (state, timeCount) {
    state.totalTime += timeCount
  },
  [types.TEACHER_GET_WORKS] (state, teacher_id) {
    api.getUser().then(response => {
      let user = new models.User(response.body['user'])
      console.log(user.id)
      let article = new models.Article(response.body['user'])
      console.log(article.id)
    }, response => {

    })
  }

};
