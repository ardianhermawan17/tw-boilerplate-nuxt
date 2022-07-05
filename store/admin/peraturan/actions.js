export default {
    async getPeraturan({ state, commit }) {
        commit('SET_LOADING', true)
        const { code, data, message, errors } = await this.$peraturanService.getPeraturan({
            params: {
                ...state.filter
            }
        })

        if (code !== 200) {
            return {
                status: code,
                error: {
                    errors,
                    message
                }
            }
        }


        commit('SET_ITEMS', Object.assign({}, data))

        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data
        }
    },
    async getNonPaginationPeraturan({ state, commit }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$peraturanService.getPeraturan({})


        if (code !== 200) {
            return {
                status: code,
                error: {
                    errors,
                    message
                }
            }
        }

        commit(
            'SET_NON_PAGINATION_ITEMS',
            data
        )

        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data
        }
    },
    async updatePeraturan({ state, commit }, { peraturanId, payload }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$peraturanService.updatePeraturan(peraturanId, payload)

        if (code !== 200) {
            return {
                status: code,
                error: {
                    errors,
                    message
                }
            }
        }

        commit(
            'SET_DETAIL_ITEM',
            Object.assign({}, data)
        )

        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data
        }
    },
    async showPeraturan({ state, commit }, peraturanId) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$peraturanService.showPeraturan(peraturanId)


        if (code !== 200) {
            return {
                status: code,
                error: {
                    errors,
                    message
                }
            }
        }

        commit(
            'SET_DETAIL_ITEMS',
            Object.assign({}, data)
        )

        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data
        }
    },
    async deletePeraturan({ state, commit }, peraturanId) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$peraturanService.deletePeraturan(peraturanId)


        if (code !== 200) {
            return {
                status: code,
                error: {
                    errors,
                    message
                }
            }
        }

        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data
        }
    },
    async createPeraturan({ state, commit }, payload) {
        commit('SET_LOADING', true)
        console.log(payload)
        const {
            code,
            data,
            message,
            errors
        } = await this.$peraturanService.createPeraturan(payload)


        if (code !== 200) {
            return {
                status: code,
                error: {
                    errors,
                    message
                }
            }
        }

        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data,
        }
    },
}