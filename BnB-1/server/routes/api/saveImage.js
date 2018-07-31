const express = require('express');
const fs = require('fs');
const multiparty = require ('multiparty');

module.exports = (app) => {
  app.post('/saveImage/save',(req,res,next)=> {

    console.log('message: Save Called Succesfully!');
    let form = new multiparty.Form();

    form.parse(req, (err,fields,files) => {
      let {path:tempPath,originalFilename} = files.imageFile[0];
      let copyToPath = './images/' + originalFilename;

      fs.readFile(tempPath, (err,data) => {
        fs.writeFiles(newPath,data, (err) => {
          fs.unlink(tmpPath,() => {
            res.send("File Uploaded to: "+ newPath);
          });
        });
      });
    })
    function saveImage (req,res) {

    }
  });

}
