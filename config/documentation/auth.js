const body = {
    login: `
        {
            "email": String,
            "password: String
        }`
}

const response = {
    login: {
        success: `
        {            
            "type": "object",
            "properties": {
              "token": {
                "type": "string"
              }
            },
            "required": [
              "token"
            ]
          }`,
        error: ``
    },
    get_user: {
        success: `

        {
          "$schema": "http://json-schema.org/draft-04/schema#",
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            },
            "code": {
              "type": "integer"
            },
            "data": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string"
                },
                "email": {
                  "type": "string"
                }
              },
              "required": [
                "name",
                "email"
              ]
            }
          },
          "required": [
            "message",
            "code",
            "data"
          ]
        }
        
        `,
        error: ``
    },
    logout: {
        success: `
        {          
          "type": "object",
          "properties": {
            "success": {
              "type": "boolean"
            },
            "message": {
              "type": "string"
            }
          },
          "required": [
            "success",
            "message"
          ]
        }
        `,
        error: ``
    }
}

export default [{
        name: 'Login',
        type: 'POST',
        description: 'Login admin',
        groupRoute: '/api/auth',
        isLogin: false,
        route: 'login',
        parameters: {
            body: {
                code: body.login
            }
        },
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.login.success
            }
        }
    },
    {
        name: 'Get User',
        type: 'GET',
        description: 'Get user login data',
        groupRoute: '/api/auth/',
        isLogin: true,
        route: 'get-user',
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.get_user.success
            }
        }
    },
    {
        name: 'Logout',
        type: 'GET',
        description: 'Logout user',
        groupRoute: '/api/auth/',
        isLogin: true,
        route: 'logout',
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.logout.success
            }
        }
    }
]