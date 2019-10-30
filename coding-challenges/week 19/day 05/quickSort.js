
const quickSort = arr => {
    if(arr.length <= 1) {
        return arr;
    }

    let left = [],
    right = [],
    pivot =  arr.shift(),
    center = [pivot];

    while(arr.length) {
        let currentElement = arr.shift();
        if(currentElement == pivot) {
            center.push(currentElement);
        }
        else if(currentElement > pivot) {
            right.push(currentElement);
        }
        else {
            left.push(currentElement);
        }
    }
    return quickSort(left).concat(center, quickSort(right));
}

const main = arr => {
    let sortedArray = quickSort(arr);
    return console.log(`sortedArray => ${sortedArray}`);
}

let a = [4,8,98,34,667,45,2];
main(a);