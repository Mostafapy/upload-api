const aws = require('aws-sdk');

const multer = require('multer');

const multerS3 = require('multer-s3');

const s3 = new aws.S3({
    accessKeyId: 'AKIA5246B5BHQ7OTOMH4',
    secretAccessKey: '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'
});

const bucket = 'uploadimageawss3bucket';

const upload = multer({
    storage: multerS3({
      s3,
      bucket,
      acl: 'public-read',
      contentDisposition: 'attachment',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: function (_req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (_req, file, cb) {
        cb(null, file.originalname)
      }
    })
})

module.exports = upload;