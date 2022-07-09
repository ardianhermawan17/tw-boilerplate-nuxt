// eslint-disable-next-line no-unused-vars
const body = {

}

const response = {
    filter_search: {
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
                    "tahun": {
                      "type": "string"
                    },
                    "created_at": {
                      "type": "string"
                    },
                    "updated_at": {
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
                    }
                  },
                  "required": [
                    "id",
                    "kategori_id",
                    "content",
                    "satuan",
                    "harga_satuan",
                    "tahun",
                    "created_at",
                    "updated_at",
                    "kategori"
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
    keyword: {
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
    filter_search_by_keyword: {
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
        name: 'Auto Search',
        type: 'GET',
        description: 'To get auto search peraturan',
        groupRoute: '/api/auto-search/',
        isLogin: false,
        route: 'filter-search',
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.filter_search.success
            }
        }
    },
    {
        name: 'Get Keyword',
        type: 'GET',
        description: 'Get list keyword',
        groupRoute: '/api/auto-search/',
        isLogin: false,
        route: 'keyword',
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.keyword.success
            }
        }
    },
    {
        name: 'Auto Search By Keyword',
        type: 'GET',
        description: 'To get auto search peraturan by keyword',
        groupRoute: '/api/auto-search/',
        isLogin: false,
        route: 'filter-search-by-keyword',
        response: {
            success: {
                code: 200,
                message: 'Successful Operation',
                data: response.filter_search_by_keyword.success
            }
        }
    }
]