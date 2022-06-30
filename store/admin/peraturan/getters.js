export default {
    filter(state) {
        state.filter.per_page = state.filter.per_page ? parseInt(state.filter.per_page) : 5
        state.filter.page = state.filter.page ? parseInt(state.filter.page) : 1
        state.filter.total = state.filter.total ? parseInt(state.filter.total) : null
        state.filter.sortBy = state.filter.sortBy ? state.filter.sortBy : []
        state.filter.desc = state.filter.desc ? state.filter.desc : []
        state.filter.search = state.filter.search ? state.filter.search : null
        return state.filter
    }
}