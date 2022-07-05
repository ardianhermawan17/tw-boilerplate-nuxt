export default {
    filter(state) {
        const filterState = Object.assign({}, state.filter)
        filterState.per_page = state.filter.per_page ? parseInt(state.filter.per_page) : 5
        filterState.page = state.filter.page ? parseInt(state.filter.page) : 1
        filterState.total = state.filter.total ? parseInt(state.filter.total) : null
        filterState.sortBy = state.filter.sortBy ? state.filter.sortBy : []
        filterState.desc = state.filter.desc ? state.filter.desc : []
        filterState.search = state.filter.search ? state.filter.search : null
        return filterState
    }
}