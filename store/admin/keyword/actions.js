export default {
    async getKeyword({ state, commit }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$keywordService.getKeyword({
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
    async getNonPaginationKeyword({
        state,
        commit
    }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$keywordService.getKeyword(
            null
        )

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
    async updateKeyword({ state, commit }, { keywordId, payload }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$keywordService.updateKeyword(
            keywordId,
            payload
        )

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
    async showKeyword({ state, commit },
        keywordId
    ) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$keywordService.showKeyword(
            keywordId
        )

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
    async deleteKeyword({ state, commit },
        keywordId
    ) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$keywordService.deleteKeyword(
            keywordId
        )

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
    async createKeyword({ state, commit },
        payload
    ) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$keywordService.createKeyword(
            payload
        )

        if (code !== 200) {
            return {
                status: code,
                errors,
                message
            }
        }

        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data
        }
    }
}