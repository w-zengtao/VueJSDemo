import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  totalTime: 6,
  list: [
    {
      name: 'ztao',
      avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
      date: '2016-12-25',
      totalTime: '6',
      comment: 'Spend About Six Hours Stay With ChenJuan'
    }
  ]
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
