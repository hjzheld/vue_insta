import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : 30,
      click : 0,
      more : {}
    }
  },
  mutations :{
    changeName(state) {
        state.name = 'park'
    },
    changeAge(state, data) {
        state.age += data
    },
    changeLikes(state) {
        if (state.click == 0) {
            state.likes += 1
            state.click = 1
        }
        else {
            state.likes -= 1
            state.click = 0
        }
    },
    setMore(state, data){
        state.more = data
    }
  },
  actions : {
    getData(context){
        axios.get(`https://codingapple1.github.io/vue/more0.json`)
        .then((result) => {
            result.data
            context.commit('setMore', result.data)
        })
    }
  }
})

export default store

