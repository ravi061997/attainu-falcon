
function mergeSort(arr){
    if( arr.length ==1 ) {
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle,arr.length);

    let sortedLeftArray = mergeSort(left);
    let sortedRightArray = mergeSort(right);

    return mergeSort(sortedLeftArray,sortedRightArray);
}

let arr = [4,1,78,5,6,8,20];
console.log(mergeSort(arr));