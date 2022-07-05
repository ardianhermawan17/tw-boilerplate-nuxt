const body = {
    store: `{
        "name": String,
        "keyword": Array
    }`,
    update: `{
        "name": String,
        "keyword": Array
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
              "type": "object",
              "properties": {
                "current_page": {
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
                },
                "first_page_url": {
                  "type": "string"
                },
                "from": {
                  "type": "integer"
                },
                "last_page": {
                  "type": "integer"
                },
                "last_page_url": {
                  "type": "string"
                },
                "next_page_url": {
                  "type": "string"
                },
                "per_page": {
                  "type": "string"
                },
                "prev_page_url": {
                  "type": "null"
                },
                "to": {
                  "type": "integer"
                },
                "total": {
                  "type": "integer"
                }
              },
              "required": [
                "current_page",
                "data",
                "first_page_url",
                "from",
                "last_page",
                "last_page_url",
                "next_page_url",
                "per_page",
                "prev_page_url",
                "to",
                "total"
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
                },
                "created_at": {
                  "type": "string"
                },
                "updated_at": {
                  "type": "string"
                },
                "keyword": {
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
                        },
                        "pivot": {
                          "type": "object",
                          "properties": {
                            "kategori_id": {
                              "type": "integer"
                            },
                            "keyword_id": {
                              "type": "integer"
                            }
                          },
                          "required": [
                            "kategori_id",
                            "keyword_id"
                          ]
                        }
                      },
                      "required": [
                        "id",
                        "name",
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
                "total_search",
                "created_at",
                "updated_at",
                "keyword"
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
        name: 'kategori',
        type: 'DELETE',
        description: 'Delete kategori ',
        groupRoute: '/api/kategori/delete/{kategoriId}',
        isLogin: true,
        route: 'delete',
        parameters: {
            path: [{
                name: 'kategoriId',
                isRequired: true,
                type: 'Integer',
                description: 'ID kategori for DELETE'
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
        name: 'kategori',
        type: 'PUT',
        description: 'Update kategori ',
        groupRoute: '/api/kategori/update/{kategoriId}',
        isLogin: true,
        route: 'update',
        parameters: {
            path: [{
                name: 'kategoriId',
                isRequired: true,
                type: 'Integer',
                description: 'ID kategori for UPDATE'
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
        name: 'kategori',
        type: 'POST',
        description: 'Create new kategori ',
        groupRoute: '/api/kategori/store',
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
        name: 'kategori',
        type: 'GET',
        description: 'Show Detail kategori ',
        groupRoute: '/api/kategori/show/{kategoriId}',
        isLogin: true,
        route: 'show',
        parameters: {
            path: [{
                name: 'kategoriId',
                isRequired: true,
                type: 'Integer',
                description: 'ID kategori for DETAIL'
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