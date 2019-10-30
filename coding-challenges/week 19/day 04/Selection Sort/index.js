
let array = [6,5,3,1,7,2,4,8];
 
function selectionSort(arr) {

    for( let i=0; i<arr.length; i++) {
        let min =i;
        for(let j= i+1; j<arr.length; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        if( i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return array;
}
console.log(selectionSort(array));

