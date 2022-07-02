export default {
    SET_ITEMS: (state, payload) => {
        state.items = payload
    },
    SET_SEARCH: (state, payload) => {
        state.search = payload
    },
    SET_KEYWORD_IDS(state, payload) {
        state.keyword_ids = payload
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    }
}