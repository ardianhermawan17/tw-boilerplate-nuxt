import Vue from 'vue'

if (!Vue.__global_mixin__) {
    Vue.__global_mixin__ = true
    Vue.mixin({
        directive: {
            focus: {
                inserted(element) {
                    element.focus()
                }
            }
        },
        computed: {
            $user() {
                // TODO:: Rearrange this with your state
                return this.$store.state.account.user
            }
        },
        methods: {
            $baseModal(action, modalName) {
                this.$nuxt.$emit('toggle-modal', { action, modalName })
            },
            $baseSnackbar(name, snackbarData) {
                this.$nuxt.$emit(
                    'show-snackbar',
                    Object.assign(snackbarData, { name })
                )
            },
            $switchModal(closeModal, openModal) {
                this.$baseModal('close', closeModal)
                this.$baseModal('open', openModal)
            }
        },
    })
}