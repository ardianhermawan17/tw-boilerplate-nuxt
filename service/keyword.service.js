export default ($axios, resource) => ({
    getKeyword() {
        return $axios.$get(`${resource}/`)
    }
})