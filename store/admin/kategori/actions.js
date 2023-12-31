export default {
    async getKategori({ state, commit }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$kategoriService.getKategori({
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

        commit(
            'SET_ITEMS',
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
    async getNonPaginationKategori({ state, commit }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$kategoriService.getKategori({})


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
    async updateKategori({ state, commit }, { kategoriId, payload }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$kategoriService.updateKategori(kategoriId, payload)

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
    async showKategori({ state, commit }, kategoriId) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$kategoriService.showKategori(kategoriId)


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
    async deleteKategori({ state, commit }, kategoriId) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$kategoriService.deleteKategori(kategoriId)


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
    async createKategori({ state, commit }, payload) {
        commit('SET_LOADING', true)
        console.log(payload)
        const {
            code,
            data,
            message,
            errors
        } = await this.$kategoriService.createKategori(payload)


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