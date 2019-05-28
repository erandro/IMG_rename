let fs = require('fs');
// insert your directory here:
let targetDirectory = "target directory"
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
    else if (files[i].charAt(0) === "P" && files[i].charAt(1) === "A") {
        var changedName = files[i].split('PANO').join("");
        fs.rename(targetDirectory + files[i], targetDirectory + "IMG" + changedName, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
    // change Screenshot to IMG
    else if (files[i].charAt(0) === "S" && files[i].charAt(1) === "c") {
        var changedName = files[i].split('Screenshot').join("").split('-').join("_");
        fs.rename(targetDirectory + files[i], targetDirectory + "IMG" + changedName, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
    // change COLLAGE to IMG
    else if (files[i].length - 5 === "E" && files[i].length - 6 === "G") {
        var changedName = files[i].split('-COLLAGE').join("");
        fs.rename(targetDirectory + files[i], targetDirectory + "IMG_" + changedName, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
}