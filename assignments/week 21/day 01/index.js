var arr = [100,10,20,1,4,3]

function checkIfHeap(arr=[],i,n){
    console.log("i:",i,arr)
    let a = 2*i + 1;
    console.log("a:",a,"i:",i);
    
    let b = 2*i + 2;
    console.log("b:",b)
  //check if leaf node as leaf always start at location n/2
  if(i > (n-2)/2){
  return true;
  }

  //recursively call checkIfHeap function if childs are smaller than parent
  if( (arr[i] >= arr[a]) && (arr[i] >= arr[b])){
   if((checkIfHeap(arr,a,n)) && (checkIfHeap(arr,b,n)))
  {
    console.log("i:",i,true);
    return true;
  }
  }

  return false;
}


if(checkIfHeap(arr,0,arr.length-1)){
  console.log(`${arr} is max heap`)
}
else console.log(`${arr} is not a max heap`);

