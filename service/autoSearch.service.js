export default ($axios, resource) => ({
    getFilterSearchPeraturan(filter) {
        return $axios.$get(`${resource}/filter-search/`, filter)
    },
    getFilterSearchByKeywordPeraturan(filter) {
        return $axios.$get(`${resource}/filter-search-by-keyword/`, filter)
    },
})