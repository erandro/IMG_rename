let fs = require('fs');
// insert your directory here:
let targetDirectory = ""
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
    else if (files[i].indexOf("-COLLAGE") !== -1) {
        var changedName = files[i].split('-COLLAGE').join("");
        fs.rename(targetDirectory + files[i], targetDirectory + "IMG_" + changedName, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
    // change COVER to IMG
    else if (files[i].indexOf("_COVER") !== -1) {
        var changedName = files[i].split('_COVER').join("").split('BURST');
        fs.rename(targetDirectory + files[i], targetDirectory + "IMG_" + changedName[1], function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
    // change ANIMATION to IMG
    else if (files[i].indexOf("-ANIMATION") !== -1) {
        var NameEnd = files[i].split('.')[1];
        var changedName = files[i].split('-ANIMATION')[0];
        if (files[i].indexOf("IMG") === -1) changedName = "IMG_" + changedName;
        fs.rename(targetDirectory + files[i], targetDirectory + changedName + "." + NameEnd, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
    // change IMG- to IMG_
    else if (files[i].indexOf("IMG-") !== -1) {
        var NameEnd = files[i].split('IMG-')[1];
        var changedName = "IMG_" + NameEnd;
        fs.rename(targetDirectory + files[i], targetDirectory + changedName, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
    // add an _ after the date
    else if (files[i].charAt(12) !== "_" && files[i].split('.')[1] === "jpg") {
        if (files[i].charAt(12) === "-") {
            var changedName = files[i].split('-').join("_");
            fs.rename(targetDirectory + files[i], targetDirectory + changedName, function (err) {
                if (err) console.log('ERROR: ' + err);
            });
        }
        else {
            var start = files[i].slice(0, 12);
            var end = files[i].slice(12);
            var changedName = start + "_" + end;
            fs.rename(targetDirectory + files[i], targetDirectory + changedName, function (err) {
                if (err) console.log('ERROR: ' + err);
            });
        }
    }
    // change exported to IMG
    else if (files[i].indexOf("exported") !== -1) {
        var NameEnd = files[i].split('.')[1];
        var changedName = files[i].split('exported')[0];
        fs.rename(targetDirectory + files[i], targetDirectory + changedName + "." + NameEnd, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    }
}

// need to add a condition to add "-2" or something in order to not have two files with the same name
// this situation happen when the picture is a copy of onother picture (collage or zoom)