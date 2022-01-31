const { resolveObjectURL } = require('buffer');
const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            //return out of the fucntion here to make sure the Promsie doesn't accidentally execute the resolve() function as well
            return;
        }

        // if everything went well, resolve the Pormise and send the successful data to the `.then()` method
        resolve({
            ok: true,
            message: 'File created!'
        });
      });
    });
};


const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'Style Sheet copied!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };