let a = [[1, 1, 1, 1],[2, 2, 2, 2],[3, 3, 3, 3],[4, 4, 4, 4]];  

let b = [[1, 1, 1, 1],[2, 2, 2, 2],[3, 3, 3, 3],[4, 4, 4, 4]];

let  result = [];

let newArray =[];

let addMatrix = (a,b) => {
    for(let i=0;i<a.length;i++) {
        if(a.length != b.length) {
            return console.log("a and b not contain the same number of arrays");
        }
        else {
            if(a[i].length != b[i].length) {
                return console.log(`${a[i]} and ${b[i]} does not contain the same element`);
            }
            else {
                for (let j=0; j < a[i].length;j++) {
                    newArray.push(a[i][j] + b[i][j]);
                }
                result.push(newArray);
            }
        }
        newArray=[];
    }
    console.log(result);
}
addMatrix(a,b);

        