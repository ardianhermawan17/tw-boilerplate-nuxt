export default ($axios, resource) => ({
    getKategori(filter) {
        return $axios.$get(`${resource}/`, filter)
    },
    updateKategori(kategoriId, payload) {
        return $axios.$put(`${resource}/update/${kategoriId}`, payload)
    },
    deleteKategori(kategoriId) {
        return $axios.$delete(`${resource}/delete/${kategoriId}`)
    },
    createKategori(payload) {
        return $axios.$post(`${resource}/store`, payload)
    },
    showKategori(kategoriId) {
        return $axios.$get(`${resource}/show/${kategoriId}`)
    }
})