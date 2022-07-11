import { toyService } from '../../services/toy-service'

export default {
  state: {
    toys: null,
    filterBy: null,
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
      console.log(state.filterBy);
    }
  },
  getters: {
    toys({ toys }) {
      return toys
    },
    toysToShow({ toys, filterBy }) {
      if (!filterBy) return toys
      let filteredToys = JSON.parse(JSON.stringify(toys))
      
      if (filterBy.name) {
        const regex = new RegExp(filterBy.name, 'i')
        filteredToys = filteredToys.filter(toy => regex.test(toy.name))
      }

      if(filterBy.label.length > 0 && filterBy.label[0] !== ''){
        filteredToys = filteredToys.filter(toy => filterBy.label.includes(...toy.labels))
      }

      if (filterBy.sortBy){
        switch (filterBy.sortBy) {
          case 'name':
            filteredToys.sort((toy1, toy2) => toy1.name.localeCompare(toy2.name))
            break;

          case 'price':
            filteredToys.sort((toy1, toy2) => toy1.price - toy2.price)
            break;

          case 'date':
            filteredToys.sort((toy1, toy2) => toy1.createdAt - toy2.createdAt)
            break;
        
          default:
            break;
        }
      }

      return filteredToys
    },
  },
  actions: {
    loadToys({ commit }) {
      toyService.query().then((toys) => {
        commit({ type: 'setToys', toys })
      })
    }
  },
}
