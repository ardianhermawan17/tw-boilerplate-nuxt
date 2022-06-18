import Vue from 'vue'
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode
} from 'vee-validate'
import {
    email,
    confirmed,
    numeric,
    regex,
    required
} from 'vee-validate/dist/rules'

extend('email', {
    ...email,
    message: 'is invalid'
})

extend('confirmed', {
    ...confirmed,
    message: 'does not match'
})

extend('max', {
    validate(value, args) {
        return args.length >= value.length
    },
    params: ['length'],
    message: 'too long'
})

extend('numeric', {
    ...numeric,
    message: 'numeric'
})

extend('regex', {
    ...regex,
    message: 'invalid url'
})

extend('required', {
    ...required,
    message: 'is required'
})


setInteractionMode('eager')

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)