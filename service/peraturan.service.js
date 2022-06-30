export default ($axios, resource) => ({
    totalAllData() {
        return $axios.$get(`${resource}/total-all-data`)
    },

    getPeraturan() {
        return $axios.$get(`${resource}/`)
    },
})