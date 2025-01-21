function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    console.log('arr[i]:', arr[i]);
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  console.log(arr);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(quickSort(array)); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
