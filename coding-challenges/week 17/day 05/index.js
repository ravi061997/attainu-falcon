
const mergeSortedArrays = (a,b) => {
    let mergedArray = [];

    while (a.length && b.length) {
        let smallest;

        a[0] < b[0] ? smallest = a.shift() : smallest = b.shift();

        mergedArray.push(smallest);
    }
    if(a.length) {
        mergedArray = mergedArray.concat(a);
    }
    if(b.length) {
        mergedArray = mergedArray.concat(b);
    }
    return mergedArray;

}

const main = (a,b) => {
    let mergedArrays = mergeSortedArrays(a,b);

    return mergedArrays;
}
let a = [2,5,7,12,85];
let b = [8,45,64,74,77];

console.log(main(a,b));