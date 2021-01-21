var arr = [11,8,14,3,6,2,7]

function selectionSort(arr){
  let count = 0
  for(let i=0; i< arr.length; i++){
    min = arr[i]
    minIndex = i
    for(let j=i+1; j<arr.length; j++){
      count++
      if(arr[j] < min){
        min = arr[j]
        minIndex = j
      }
    }

    if(min !== arr[i]){
      arr[minIndex] = arr[i]
      arr[i] = min
    }
  }
  
  console.log(count)
  return arr
}

console.log(selectionSort(arr))