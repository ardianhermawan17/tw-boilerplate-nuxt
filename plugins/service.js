import authenticationService from '~/service/authentication.service'

export default ({ $axios }, inject) => {
    inject('authenticationService', authenticationService($axios, '/api/auth'))
}