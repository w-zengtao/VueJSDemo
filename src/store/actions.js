import * as types from './mutation-types'

export default {
  addTime({commit}, timeCount) {
    commit(types.ADD_TOTAL_TIME, timeCount)
  },
  decTotalTime({commit}, subTotalTime) {
    commit(types.DEC_TOTAL_TIME, subTotalTime)
  },
  removeFromList({commit}, index) {
    commit(types.DELETE_PLAN, index)
  },
  savePlan({commit}, plan) {
    commit(types.SAVE_PLAN, plan)
  }
}
