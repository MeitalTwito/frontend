import { toyService } from '../../services/toy-service'

export default {
  state: {
    toys: null,
  },
  mutations:{
    setToys(state, {toys}){
      state.toys = toys
    }
  },
  getters:{
    toys({toys}){
      return toys
    }
  },
  actions:{
    loadToys({commit}){
      toyService.query().then((toys)=>{
        commit({type:'setToys', toys})
      })
    }
  },
}
