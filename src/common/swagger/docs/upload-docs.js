module.exports = {
    '/upload': {
      post: {
        tags: ['upload'],
        summary: 'Upload Image',
        operationId: 'Upload Image',
        parameters: [],
        requestBody: {
          description: '',
          content: {
            'multipart/form-data': {
              schema: {
                $ref: '#/components/schemas/UploadImageRequest'
              },
              example: {
                name: 'Test',
                logo: 'logo.png',
                image: 'bg_img.png'
              }
            }
          },
          required: true
        },
        responses: {
          200: {
            description: 'Ok',
            headers: {},
            content: {
                'application/json': {
                  example: {
                    example: {
                      "err": null,
                      "msg": "Files Uploaded Succesfully"
                    }
                  }
                }
              }
          },
          400: {
            description: 'Bad request'
          },
          500: {
            description: 'Internal Server Error'
          },
          401: {
            description: 'UnAuthorized'
          }
        },
        deprecated: false
      },
    },
  };