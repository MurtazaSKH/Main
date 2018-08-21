const express = require('express');
const router = express.Router();
const multiparty = require('multiparty');
const fs = require('fs');
const path = require('path');

router.post('/', (req,res) => {
  const errors = {};
  let form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {
    console.log(files.imageFile[0]);
    let {path: tempPath, originalFilename} = files.imageFile[0];
    let fileName= 'Item'+Date.now()+path.extname(originalFilename)
    let copyToPath = "./client/public/images/products/" +fileName;

    fs.readFile(tempPath, (err, data) => {
      // make copy of image to new location
      fs.writeFile(copyToPath, data, (err) => {
        // delete temp image
        fs.unlink(tempPath, () => {
          res.json({filename:fileName});
        });
      });
    });
  })
});

module.exports = router;
