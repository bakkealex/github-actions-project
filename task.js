// Sample array
// array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// Generate an array with 70000 values, some duplicates and some unique
let array = [];
for (let i = 0; i < 70000; i++) {
  array.push(Math.floor(Math.random() * 10000)); // Random numbers between 0 and 9999
}

// // Find the largest number
// function largestNumber(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) largest = arr[i];
//   }
//   return largest;
// }

// // console.log(largestNumber(array)); // 9

// // Use this inefficient function, and improve it.
// function inefficientFunction(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function moreEfficientFunction(arr) {
//   let resultSet = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     resultSet.add(arr[i]);
//   }
//   return Array.from(resultSet);
// }

// // console.time('inefficientFunction');
// // console.log(inefficientFunction(array));
// // console.timeEnd('inefficientFunction');

// // console.time('moreEfficientFunction');
// // console.log(moreEfficientFunction(array));
// // console.timeEnd('moreEfficientFunction');
// // console.log(inefficientFunction(array)); // [3, 1, 4, 5, 9, 2, 6]

// function bubbleSort(arr) {
//   let n = arr.length;
//   // Flag used to determine if a swap occurred
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < n - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         // Swap the elements
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// }

// // console.time('bubbleSort');
// // console.log(bubbleSort(array));
// // console.timeEnd('bubbleSort');

// function selectionSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     // Finding the smallest number in the unsorted portion
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     // Swapping the found minimum element with the first element
//     if (min !== i) {
//       let temp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = temp;
//     }
//   }
//   return arr;
// }

// console.time('selectionSort');
// console.log(selectionSort(array));
// console.timeEnd('selectionSort');

// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     // Moving elements that are greater than 'current' to one position ahead of their current position
//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = current;
//   }
//   return arr;
// }

// console.time('insertionSort');
// console.log(insertionSort(array));
// console.timeEnd('insertionSort');

// function quickSort(arr) {
//   let stack = [{ left: 0, right: arr.length - 1 }];

//   while (stack.length) {
//     let { left, right } = stack.pop();
//     if (left < right) {
//       let pivotIndex = partition(arr, left, right);
//       stack.push({ left: left, right: pivotIndex - 1 });
//       stack.push({ left: pivotIndex + 1, right: right });
//     }
//   }
//   return arr;
// }

// function partition(arr, left, right) {
//   let pivot = arr[right];
//   let i = left - 1;
//   for (let j = left; j < right; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]]; // Swapping elements
//     }
//   }
//   [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // Swapping pivot to the correct position
//   return i + 1;
// }

// console.time('quickSort');
// console.log(quickSort(array));
// console.timeEnd('quickSort');

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let sortedArray = [];
//   while (left.length && right.length) {
//     // Sorting the two halves
//     if (left[0] < right[0]) {
//       sortedArray.push(left.shift());
//     } else {
//       sortedArray.push(right.shift());
//     }
//   }
//   // Concatenating the remaining elements
//   return [...sortedArray, ...left, ...right];
// }

// console.time('mergeSort');
// console.log(mergeSort(array));
// console.timeEnd('mergeSort');

// function heapSort(arr) {
//   buildMaxHeap(arr);
//   for (let i = arr.length - 1; i > 0; i--) {
//     // Swapping the first element (largest) with the last element
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     // Heapify the root element to ensure the max heap property
//     heapify(arr, 0, i);
//   }
//   return arr;
// }

// function buildMaxHeap(arr) {
//   const startIdx = Math.floor(arr.length / 2 - 1);
//   for (let i = startIdx; i >= 0; i--) {
//     heapify(arr, i, arr.length);
//   }
// }

// function heapify(arr, idx, max) {
//   let largest = idx;
//   const left = 2 * idx + 1;
//   const right = 2 * idx + 2;
//   // Checking if left or right child is larger than current element
//   if (left < max && arr[left] > arr[largest]) {
//     largest = left;
//   }
//   if (right < max && arr[right] > arr[largest]) {
//     largest = right;
//   }
//   // Swapping and continuing to heapify if root is not largest
//   if (largest !== idx) {
//     [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
//     heapify(arr, largest, max);
//   }
// }

// console.time('heapSort');
// console.log(heapSort(array));
// console.timeEnd('heapSort');

// function radixSort(arr) {
//   const maxNum = Math.max(...arr) * 10;
//   let divisor = 10;
//   while (divisor < maxNum) {
//     let buckets = [...Array(10)].map(() => []);
//     for (let num of arr) {
//       buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
//     }
//     arr = [].concat(...buckets);
//     divisor *= 10;
//   }
//   return arr;
// }

// console.time('radixSort');
// console.log(radixSort(array));
// console.timeEnd('radixSort');

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i; // Target found, return the index
//     }
//   }
//   return -1; // Target not found
// }

// console.time('linearSearch');
// console.log(linearSearch(array, 141813187));
// console.timeEnd('linearSearch');

let sampleInput = [29, 72, 98, 13, 87];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(sampleInput)); // [13, 29, 72, 87, 98]
