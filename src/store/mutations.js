import * as types from './mutation-types'

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
  }
};
