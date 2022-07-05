const body = {
    store: `{
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
    }
}

export default [{
        name: 'peraturan',
        type: 'GET',
        groupRoute: '/api/peraturan/',
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
        groupRoute: '/api/peraturan/delete/{peraturanId}',
        isLogin: true,
        route: 'delete',
        parameters: {
            path: [{
                name: 'peraturanId',
                isRequired: true,
                type: 'Integer',
                description: 'ID peraturan for DELETE'
            }],
            body: {
                code: body.get
            }
        },
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.get.success
            }
        }
    }
]