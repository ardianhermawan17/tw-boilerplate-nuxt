import authenticationService from '~/service/authentication.service'
import peraturanService from '~/service/peraturan.service'
import kategoriService from '~/service/kategori.service'
import keywordService from '~/service/keyword.service'
import autoSearchService from '~/service/autoSearch.service'


export default ({ $axios }, inject) => {
    inject('authenticationService', authenticationService($axios, '/api/admin/auth'))
    inject('autoSearchService', autoSearchService($axios, '/api/peraturan'))
    inject('peraturanService', peraturanService($axios, '/api/admin/peraturan'))
    inject('kategoriService', kategoriService($axios, '/api/admin/kategori'))
    inject('keywordService', keywordService($axios, '/api/admin/keyword'))
}