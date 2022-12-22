import axios from 'axios'

export default { 
	namespaced: true,
	state: () => ({
		track:[],
		artist: []
	}),
	getters: '',
	mutations: {
		updateState(state, payload){
			Object.keys(payload).forEach( key => {
				state[key] = payload[key]
			})
		},
		resetMusics( state ){
			state.track = []
			state.artist = []
		}
	},
	actions: {
		// 검색을 했을때 데이터 불러오기
		async searchMusics ( { commit }, payload ) {
			const LAST_API_KEY ='b567bab1cfda210be8b83a92d9f0d976'
			const { search } = payload
      const res = await axios.get( `https://ws.audioscrobbler.com/2.0/?&limit=6&method=track.search&track=${search}&api_key=${LAST_API_KEY}&format=json`)
      const { track } = res.data.results.trackmatches
			commit('updateState', {
				musics: track
			})
		},
		// 기본값  
		async creatMusics({ commit } ){
			const LAST_API_KEY ='b567bab1cfda210be8b83a92d9f0d976'
			const getTopTrack = await axios.get(
				`https://ws.audioscrobbler.com/2.0/?&limit=6&method=chart.gettoptracks&api_key=${LAST_API_KEY}&format=json`
			)
			const getTopArtists = await axios.get(
				`https://ws.audioscrobbler.com/2.0/?&limit=6&method=geo.gettopartists&country=spain&api_key=${LAST_API_KEY}&format=json`
			)

			commit('updateState', { track: getTopTrack.data.tracks.track} )			
			commit('updateState', { artist: getTopArtists.data.topartists.artist} )			
		}
	}
}