module.exports = {
    openapi: '3.0.0',
    info: {
      title: 'APP',
      description: 'App backend APIs documentation',
      version: '1.0'
    },
    servers: [
      {
        url: '{protocol}//cemfjhtr86.execute-api.us-east-1.amazonaws.com/dev/',
        description: 'AWS server (integration)',
        variables: {
          protocol: {
            enum: ['http', 'https'],
            default: 'https'
          }
        }
      }
    ],
    tags: [
      {
        name: 'upload'
      },
    ]
  };
  