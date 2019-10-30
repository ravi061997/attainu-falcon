
const fs = require("fs");

function searchString(fileName , searchWord) {
    fs.readFile(fileName, 'utf-8', (err,data) => {
        if (err) {
            return ("error occured during reading file" , err)
        }
        data = data.split("\n")

        data.forEach((d,i) => {
            if(d.includes(searchWord)) {
                console.log("line no =>" ,i,d)
            }
        })
    })
}

searchString("file.txt", "Ansal")