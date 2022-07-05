// const baseItems = [{
//         id: 1,
//         regulation: 'Honorarium Panitia Pengadaan Barang (Non Konstruksi) -Nilai pagu diatas Rp 2,5 - 5 miliar ',
//         category: 'honorium-panitia',
//         unit: 'orang',
//         unitPrice: 240000000,
//         keywords: [
//             { id: 1, name: 'Honorium' },
//             { id: 2, name: 'pegawai' },
//             { id: 3, name: 'kerja' }
//         ]
//     },
//     {
//         id: 2,
//         regulation: 'Honorarium Dosen Ardian',
//         category: 'honorium-panitia',
//         unit: 'orang',
//         unitPrice: 440000000,
//         keywords: [
//             { id: 1, name: 'Honorium' },
//             { id: 2, name: 'pegawai' },
//             { id: 3, name: 'kerja' }
//         ]
//     },
//     {
//         id: 3,
//         regulation: 'Honorarium Dosen Krista',
//         category: 'honorium-dosen',
//         unit: 'orang',
//         unitPrice: 440000000,
//         keywords: [
//             { id: 1, name: 'Honorium' },
//             { id: 2, name: 'pegawai' },
//             { id: 3, name: 'kerja' }
//         ]
//     },
//     {
//         id: 4,
//         regulation: 'Honorarium Hermawan',
//         category: 'honorium-dosen',
//         unit: 'orang',
//         unitPrice: 440000000,
//         keywords: [
//             { id: 1, name: 'Honorium' },
//             { id: 2, name: 'pegawai' },
//             { id: 3, name: 'kerja' }
//         ]
//     },
//     {
//         id: 5,
//         regulation: 'Honorarium Dosen Anja',
//         category: 'honorium-dosen',
//         unit: 'orang',
//         unitPrice: 740000000,
//         keywords: [
//             { id: 1, name: 'Honorium' },
//             { id: 2, name: 'pegawai' },
//             { id: 3, name: 'kerja' }
//         ]
//     },
//     {
//         id: 6,
//         regulation: 'Honorarium Dosen Iman',
//         category: 'honorium-dosen',
//         unit: 'orang',
//         unitPrice: 340000000,
//         keywords: [
//             { id: 1, name: 'Honorium' },
//             { id: 2, name: 'pegawai' },
//             { id: 3, name: 'kerja' }
//         ]
//     },
//     {
//         id: 7,
//         regulation: 'Honorarium Koko',
//         category: 'honorium-dosen',
//         unit: 'orang',
//         unitPrice: 740000000,
//         keywords: [
//             { id: 1, name: 'Honorium' },
//             { id: 2, name: 'pegawai' },
//             { id: 3, name: 'kerja' }
//         ]
//     },
//     {
//         id: 8,
//         regulation: 'Honorarium Dosen Dimas',
//         category: 'honorium-dosen',
//         unit: 'orang',
//         unitPrice: 940000000,
//         keywords: [
//             { id: 1, name: 'Honorium' },
//             { id: 2, name: 'pegawai' },
//             { id: 3, name: 'kerja' }
//         ]
//     }
// ]

export default () => ({
    items: [],
    detailItem: {},
    nonPaginationItems: [],
    filter: {
        per_page: 5,
        page: null,
        sortBy: [],
        desc: [],
        search: null
    },
    loading: null
})