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
		// 검색을 했을때 데이터 불러오기
		async searchMusics ( { commit }, payload ) {
			const { search } = payload
			const LAST_API_KEY ='b567bab1cfda210be8b83a92d9f0d976'
      const res = await axios.get( `https://ws.audioscrobbler.com/2.0/?&limit=6&method=track.search&track=${search}&api_key=${LAST_API_KEY}&format=json`)
      const { track } = res.data.results.trackmatches
			commit('updateState', {
				musics: track
			})
		},
		// 기본으로 불러오는것
		async creatMusics({ commit } ){
			const LAST_API_KEY ='b567bab1cfda210be8b83a92d9f0d976'
			const res = await axios.get( `https://ws.audioscrobbler.com/2.0/?&limit=6&method=chart.gettopartists&api_key=${LAST_API_KEY}&format=json`)
			const { artist } = res.data.artists
			console.log( artist );
			commit('updateState', {
				musics: artist
			})
			
		}

	}
}