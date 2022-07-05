export default {
    SET_ITEMS: (state, payload) => {
        state.items = payload
    },
    SET_KEYWORDS: (state, payload) => {
        state.keywords = payload
    },
    SET_SEARCH: (state, payload) => {
        state.search = payload
    },
    SET_SEARCH_KEYWORD: (state, payload) => {
        state.search_keyword = payload
    },
    SET_KEYWORD_IDS(state, payload) {
        state.keyword_ids = payload
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    },
    SET_LOADING_KEYWORD(state, payload) {
        state.loading_keyword = payload
    }
}