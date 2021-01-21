var arr = [11,8,14,3,6,2,7]

function insertionSort(arr){
  let count = 0
  for(let i = 1; i < arr.length; i++){
    for(let j=i; j>0; j--){
      count++
      if(arr[j] < arr[j-1]){
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      }
    }
  }
  
  console.log(count)
  return arr
}

console.log(insertionSort(arr))