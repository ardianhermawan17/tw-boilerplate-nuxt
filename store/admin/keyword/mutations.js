/* eslint-disable no-unused-expressions */
export default {
    SET_ITEMS(state, items) {
        state.items = items
        state.filter = {
            ...state.filter,
            per_page: items.per_page,
            page: items.current_page,
            total: items.total
        }
    },
    SET_DETAIL_ITEM(state, payload) {
        state.detailItem = payload
    },
    SET_NON_PAGINATION_ITEMS(state, payload) {
        state.nonPaginationItems = payload
    },
    SET_LOADING(state, payload) {
        state.loading = payload
    },
    SET_FILTER(state, filter) {
        filter.per_page ? state.filter.per_page = filter.per_page : ''
        filter.page ? state.filter.page = filter.page : ''
        filter.sortBy ? state.filter = {...state.filter, ...filter } : null
        filter.desc ? state.filter = {...state.filter, ...filter } : null
        filter.search ? state.filter = {...state.filter, ...filter } : null
    },
}