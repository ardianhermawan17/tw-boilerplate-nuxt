const body = {
    store: `{
        "name": String        
            }`,
    update: `{
        "name": String
     }`
}

const response = {
    get: {
        success: `
        {          
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            },
            "code": {
              "type": "integer"
            },
            "data": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer"
                    },
                    "name": {
                      "type": "string"
                    },
                    "created_at": {
                      "type": "string"
                    },
                    "updated_at": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "id",
                    "name",
                    "created_at",
                    "updated_at"
                  ]
                }
              ]
            }
          },
          "required": [
            "message",
            "code",
            "data"
          ]
        }`,
        error: ``
    },
    update: {
        success: `{            
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
                  "id": {
                    "type": "integer"
                  },
                  "name": {
                    "type": "string"
                  },
                  "total_search": {
                    "type": "integer"
                  }
                },
                "required": [
                  "id",
                  "name",
                  "total_search"
                ]
              }
            },
            "required": [
              "message",
              "code",
              "data"
            ]
          }`,
        error: ``
    },
    delete: {
        success: `{            
            "type": "object",
            "properties": {
              "message": {
                "type": "string"
              },
              "code": {
                "type": "integer"
              },
              "data": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "message",
              "code",
              "data"
            ]
          }`,
        error: ``
    },
    store: {
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
                "id": {
                  "type": "integer"
                },
                "name": {
                  "type": "string"
                },
                "total_search": {
                  "type": "integer"
                },
                "created_at": {
                  "type": "string"
                },
                "updated_at": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "name",
                "total_search",
                "created_at",
                "updated_at"
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
    show: {
        success: `
        {          
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
                "id": {
                  "type": "integer"
                },
                "name": {
                  "type": "string"
                },
                "kategori": {
                  "type": "array",
                  "items": [
                    {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "integer"
                        },
                        "name": {
                          "type": "string"
                        },
                        "total_search": {
                          "type": "integer"
                        },
                        "created_at": {
                          "type": "string"
                        },
                        "updated_at": {
                          "type": "string"
                        },
                        "pivot": {
                          "type": "object",
                          "properties": {
                            "keyword_id": {
                              "type": "integer"
                            },
                            "kategori_id": {
                              "type": "integer"
                            }
                          },
                          "required": [
                            "keyword_id",
                            "kategori_id"
                          ]
                        }
                      },
                      "required": [
                        "id",
                        "name",
                        "total_search",
                        "created_at",
                        "updated_at",
                        "pivot"
                      ]
                    }
                  ]
                }
              },
              "required": [
                "id",
                "name",
                "kategori"
              ]
            }
          },
          "required": [
            "message",
            "code",
            "data"
          ]
        }`,
        error: ``
    }
}

export default [{
        name: 'keyword',
        type: 'GET',
        description: 'Return all keyword with or without pagination ',
        groupRoute: '/api/keyword/',
        isLogin: true,
        route: 'get',
        parameters: {
            query: [{
                    name: 'search',
                    isRequired: false,
                    type: 'Array["string"]',
                    description: 'Query for searching'
                },
                {
                    name: 'per_page',
                    isRequired: false,
                    type: 'Integer',
                    description: 'Query for decide per_page'
                },
                {
                    name: 'page',
                    isRequired: false,
                    type: 'Integer',
                    description: 'Query for decide page'
                }
            ]
        },
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.get.success
            }
        }
    },
    {
        name: 'keyword',
        type: 'DELETE',
        description: 'Delete keyword ',
        groupRoute: '/api/keyword/delete/{keywordId}',
        isLogin: true,
        route: 'delete',
        parameters: {
            path: [{
                name: 'keywordId',
                isRequired: true,
                type: 'Integer',
                description: 'ID keyword for DELETE'
            }]
        },
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.get.success
            }
        }
    },
    {
        name: 'keyword',
        type: 'PUT',
        description: 'Update keyword ',
        groupRoute: '/api/keyword/update/{keywordId}',
        isLogin: true,
        route: 'update',
        parameters: {
            path: [{
                name: 'keywordId',
                isRequired: true,
                type: 'Integer',
                description: 'ID keyword for UPDATE'
            }],
            body: {
                code: body.update
            }
        },
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.update.success
            }
        }
    },
    {
        name: 'keyword',
        type: 'POST',
        description: 'Create new keyword ',
        groupRoute: '/api/keyword/store',
        isLogin: true,
        route: 'create',
        parameters: {
            body: {
                code: body.store
            }
        },
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.store.success
            }
        }
    },
    {
        name: 'keyword',
        type: 'GET',
        description: 'Show Detail keyword ',
        groupRoute: '/api/keyword/show/{keywordId}',
        isLogin: true,
        route: 'show',
        parameters: {
            path: [{
                name: 'keywordId',
                isRequired: true,
                type: 'Integer',
                description: 'ID keyword for DETAIL'
            }]
        },
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.show.success
            }
        }
    }
]