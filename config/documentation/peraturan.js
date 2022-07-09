const body = {
    store: `{
      "content": String,
      "kategori_id": Integer,
      "satuan" : String,
      "harga_satuan" : String
          }`,
    update: `{
      "content": String,
      "kategori_id": Integer,
      "satuan" : String,
      "harga_satuan" : String
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
                    "kategori_id": {
                      "type": "integer"
                    },
                    "content": {
                      "type": "string"
                    },
                    "satuan": {
                      "type": "string"
                    },
                    "harga_satuan": {
                      "type": "string"
                    },
                    "kategori": {
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
                    },
                    "tahun": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "id",
                    "kategori_id",
                    "content",
                    "satuan",
                    "harga_satuan",
                    "kategori",
                    "tahun"
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
                "kategori_id": {
                  "type": "integer"
                },
                "content": {
                  "type": "string"
                },
                "satuan": {
                  "type": "string"
                },
                "harga_satuan": {
                  "type": "string"
                },
                "kategori": {
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
                },
                "tahun": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "kategori_id",
                "content",
                "satuan",
                "harga_satuan",
                "kategori",
                "tahun"
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
                "kategori_id": {
                  "type": "integer"
                },
                "content": {
                  "type": "string"
                },
                "satuan": {
                  "type": "string"
                },
                "harga_satuan": {
                  "type": "string"
                },
                "kategori": {
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
                },
                "tahun": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "kategori_id",
                "content",
                "satuan",
                "harga_satuan",
                "kategori",
                "tahun"
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
                "kategori_id": {
                  "type": "integer"
                },
                "content": {
                  "type": "string"
                },
                "satuan": {
                  "type": "string"
                },
                "harga_satuan": {
                  "type": "string"
                },
                "kategori": {
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
                },
                "tahun": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "kategori_id",
                "content",
                "satuan",
                "harga_satuan",
                "kategori",
                "tahun"
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
        name: 'kategori',
        type: 'GET',
        description: 'Return all kategori with or without pagination ',
        groupRoute: '/api/kategori/',
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
        name: 'peraturan',
        type: 'DELETE',
        description: 'Delete peraturan ',
        groupRoute: '/api/peraturan/delete/{peraturanId}',
        isLogin: true,
        route: 'delete',
        parameters: {
            path: [{
                name: 'peraturanId',
                isRequired: true,
                type: 'Integer',
                description: 'ID peraturan for DELETE'
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
        name: 'peraturan',
        type: 'PUT',
        description: 'Update peraturan ',
        groupRoute: '/api/peraturan/update/{peraturanId}',
        isLogin: true,
        route: 'update',
        parameters: {
            path: [{
                name: 'peraturanId',
                isRequired: true,
                type: 'Integer',
                description: 'ID peraturan for UPDATE'
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
        name: 'peraturan',
        type: 'POST',
        description: 'Create new peraturan ',
        groupRoute: '/api/peraturan/store',
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
        name: 'peraturan',
        type: 'GET',
        description: 'Show Detail peraturan ',
        groupRoute: '/api/peraturan/show/{peraturanId}',
        isLogin: true,
        route: 'show',
        parameters: {
            path: [{
                name: 'peraturanId',
                isRequired: true,
                type: 'Integer',
                description: 'ID peraturan for DETAIL'
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