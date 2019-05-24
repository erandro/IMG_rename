let fs = require('fs');
// insert your directory here:
let targetDirectory = "my directory"
let files = fs.readdirSync(targetDirectory);

for (let i = 0; i < files.length; i++) {
    // change MVIMG to IMG
    if (files[i].charAt(0) === "M" && files[i].charAt(1) === "V") {
        var changedName = files[i].split('MV').join("");
        fs.rename(targetDirectory + files[i], targetDirectory + changedName, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
    // change PANO to IMG
    if (files[i].charAt(0) === "P" && files[i].charAt(1) === "A") {
        var changedName = files[i].split('PANO').join("");
        fs.rename(targetDirectory + files[i], targetDirectory + changedName, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
}