const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const multiparty = require('multiparty');
const fs = require('fs');
const path = require('path');


// Test Image Post

router.post('/', (req,res) => {
  const errors = {};
  let form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {
    console.log(files.imageFile[0]);
    let {path: tempPath, originalFilename} = files.imageFile[0];
    let copyToPath = "./client/public/images/" + 'Item'+path.extname(originalFilename);

    fs.readFile(tempPath, (err, data) => {
      // make copy of image to new location
      fs.writeFile(copyToPath, data, (err) => {
        // delete temp image
        fs.unlink(tempPath, () => {
          // res.send("File uploaded to: " + copyToPath);
          // return res.status(400).json({error:'test'});
        });
      });
    });
  })
  // form.parse();
  // const data = req.body;
  // console.log(data);
});

module.exports = router;
