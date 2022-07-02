export default ($axios, resource) => ({
    getKeyword(filter) {
        return $axios.$get(`${resource}/`, filter)
    },
    updateKeyword(keywordId, payload) {
        return $axios.$put(`${resource}/update/${keywordId}`, payload)
    },
    deleteKeyword(keywordId) {
        return $axios.$delete(`${resource}/delete/${keywordId}`)
    },
    createKeyword(payload) {
        return $axios.$post(`${resource}/store`, payload)
    },
    showKeyword(keywordId) {
        return $axios.$get(`${resource}/show/${keywordId}`)
    }
})