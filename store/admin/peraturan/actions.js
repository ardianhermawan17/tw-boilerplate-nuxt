export default {
    async getPeraturan({ commit }) {
        const { code, data, message, errors } = await this.$peraturanService.getPeraturan()

        if (code !== 200) {
            return {
                status: code,
                error: {
                    errors,
                    message
                }
            }
        }


        commit('SET_ITEMS', Object.assign({}, data.data))

        return {
            error: null,
            message,
            data: {
                data: data.data
            }
        }
    }
}