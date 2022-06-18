export default ({ $axios }) => {
    $axios.onError(err => {
        return Promise.resolve(err.response)
    })
}