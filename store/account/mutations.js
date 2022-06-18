export default {
    SET_USER: (state, user) => {
        state.user = user
    },
    SET_CACHE: (state, cache) => {
        state.cache = cache
    },
    UPDATE_AUTH(state, { props, value }) {
        state.user[props] = value
    }
}