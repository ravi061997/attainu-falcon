
let array = [6,5,3,1,7,2,4,8];

function bubbleSort(arr) {

    for(i=0; i<arr.length; i++) {

        for(j=0; j<arr.length; j++){

            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));
