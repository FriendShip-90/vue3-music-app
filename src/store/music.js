import axios from 'axios'

export default { 
	namespaced: true,
	state: () => ({
		musics: []
	}),
	getters: '',
	mutations: {
		updateState(state, payload){
			Object.keys(payload).forEach( key => {
				state[key] = payload[key]
			})
		},
		resetMusics( state ){
			state.musics = []
		}
	},
	actions: {
		async searchMusics ( { commit }, payload ) {
			const { search } = payload
			const LAST_API_KEY ='b567bab1cfda210be8b83a92d9f0d976'
			
      const res = await axios.get( `https://ws.audioscrobbler.com//2.0/?method=track.search&track=${search}&api_key=${LAST_API_KEY}&format=json` )
      const { track } = res.data.results.trackmatches
			commit('updateState', {
				musics: track
			})
		}
	}
}