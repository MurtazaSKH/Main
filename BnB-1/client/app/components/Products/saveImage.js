const express = require('express');
const fs = require('fs');

function saveImage (req,res) {
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
}
