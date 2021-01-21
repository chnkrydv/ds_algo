var arr = [11,8,14,3,6,2,7]

function bubbleSort(arr){
  let count = 0
  for(var i=0; i<arr.length; i++){
    for(var j=0; j<arr.length - i - 1; j++){
      count++
      if(arr[j] > arr[j+1]) {
        var temp = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = temp
      }
    }
  }
  
  console.log(count)
  return arr
}

console.log(bubbleSort(arr))