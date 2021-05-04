const expect = require('expect.js'),
    supertest = require('supertest');
const request = supertest('https://cemfjhtr86.execute-api.us-east-1.amazonaws.com/dev/');
const path = require('path');

describe('upload', function() {
    it('a file', function(done) {
       request.post('/upload')
              .field('Content-Type', 'multipart/form-data')
              .attach('file', path.join(__dirname, '../common/images/image.jpg'))
              .end(function(err, res) {
                  expect(res.status).to.equal(200);// 'success' status
                  done()
              });
    });
});