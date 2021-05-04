/**
 * @description api to upload files
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns file uploaded array
 */
const imageUpload = (req, res, _next) => {
    const { image } = req.body;

    return res.status(200).send({
      err: null,
      msg: 'Files Uploaded Succesfully',
      data: image,
    });
};

module.exports = imageUpload;