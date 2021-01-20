var arr = [11,8,14,3,6,2,7]

function bubbleSort(arr){
  for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr.length - i; j++){
      if(arr[j] > arr[j+1]) {
        var temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  
  return arr
}

console.log(bubbleSort(arr))