export default {
    axios: {
        browserBaseURL: process.env.BROWSER_BASE_URL || 'http://localhost:8000'
    },
    baseURL: process.env.BASE_URL || 'http://localhost:8000',
}

// TODO::dont forget to change baseURL on dev