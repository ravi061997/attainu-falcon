let array = [[1,2,3],[4,5,6],[7,8,9]]

function printMaxArray(array) {
    let results =[];
    for(let i=0; i<array.length; i++) {
        results.push(array[i][0])
        for( j=0; j<array[0].length; j++) {
            if(array[i][j]>result[i]) {
                result[i] == array[i][j]
            }
        }
        console.log(result.toString())
    }

}

printMaxArray(array);