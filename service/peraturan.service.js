export default ($axios, resource) => ({
    totalAllData() {
        return $axios.$get(`${resource}/total-all-data`)
    },
    getPeraturan() {
        return $axios.$get(`${resource}/`)
    },
    updatePeraturan(peraturanId, payload) {
        return $axios.$put(`${resource}/update/${peraturanId}`, payload)
    },
    deletePeraturan(peraturanId) {
        return $axios.$delete(`${resource}/delete/${peraturanId}`)
    },
    createPeraturan(payload) {
        return $axios.$post(`${resource}/store`, payload)
    },
    showPeraturan(peraturanId) {
        return $axios.$get(`${resource}/show/${peraturanId}`)
    }
})