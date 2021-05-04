module.exports = {
    UploadImageRequest: {
      title: 'UploadImageRequest',
      required: ['image'],
      type: 'object',
      properties: {
        image: {
          type: 'string',
          format: 'binary'
        }
      },
      example: {
        image: 'bg_img'
      }
    },
  };