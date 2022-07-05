export default {
    async getFilterSearchPeraturan({
        state,
        commit
    }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$autoSearchService.getFilterSearchPeraturan({
            params: {
                search: state.search
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

        commit('SET_ITEMS', data)
        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data
        }
    },

    async getFilterSearchByKeywordPeraturan({
        state,
        commit
    }) {
        commit('SET_LOADING', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$autoSearchService.getFilterSearchByKeywordPeraturan({
            params: {
                search: state.search,
                keyword_ids: state.keyword_ids
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

        commit('SET_ITEMS', data)
        commit('SET_LOADING', false)
        return {
            error: null,
            code,
            message,
            data
        }
    },

    async getKeywords({
        state,
        commit
    }) {
        commit('SET_LOADING_KEYWORD', true)
        const {
            code,
            data,
            message,
            errors
        } = await this.$autoSearchService.getKeywords({
            params: {
                search: state.search_keyword
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

        commit('SET_KEYWORDS', data)
        commit('SET_LOADING_KEYWORD', false)
        return {
            error: null,
            code,
            message,
            data
        }
    },
}