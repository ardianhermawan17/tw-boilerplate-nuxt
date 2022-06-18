export default ($axios, resource) => ({
    login(payload) {
        return $axios.$post(`${resource}/login`, payload)
    },

    register(payload) {
        return $axios.$post(`${resource}/register`, payload)
    },
})