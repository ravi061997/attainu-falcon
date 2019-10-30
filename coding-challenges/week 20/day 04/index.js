function numfreq(arr=[]){
    let map = {}
    for(let i=0;i<arr.length;i++){
      if(map[arr[i]]){
        map[arr[i]]++;
      }
      else{
        map[arr[i]] = 1; 
      }
    }
    return map;
  }
  
  numfreq([10, 20, 20, 10, 10, 20, 5, 20])