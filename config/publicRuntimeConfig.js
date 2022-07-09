export default {
    axios: {
        browserBaseURL: process.env.BROWSER_BASE_URL || 'https://backend-autofintion.microlance.id/public/'
    },
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:8000/',
}

// TODO::dont forget to change baseURL on dev