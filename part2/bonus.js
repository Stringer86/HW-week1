// Define a function named bigSum that takes in an arbitrary number of
// arguments. Assume all arguments are a number.
//
// Return the sum of all of the arguments. For example, given 1, 2, 3, and 4,
// then return 10. If there are no arguments, return 0.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
function bigSum() {
  // YOUR CODE HERE
  if (arguments.length === 0) {
    return 0;
  }else {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
    }
  }
  return sum;
}

// Define a function named pluck that takes in two arguments.
//     arr (array of objects)
//     key (string)
//
// Return a new array where each element is the keyed value of each object.
//
// For example, given the array:
//    [
//      { name: 'moe', age: 40 },
//      { name: 'larry', age: 50 },
//      { name: 'curly', age: 60 }
//    ]
//
// and the key 'name', then return ['moe', 'larry', 'curly'].
function pluck(arr, key) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i][key]);
  }
  return newArr;
}




// Define a function named pick that takes in two arguments.
//    obj (object)
//    keys (array of strings)
//
// Return a new object that contains only the specified keys. For example, given
// { name: 'moe', age: 50, id: 1 } and ['name', 'age'], then return
// { name: 'moe', age: 50 }.
function pick(obj, keys) {
  obj2 = {}
  if (obj.length === 0) {
    return {};
  }
  for (var i = 0; i < keys.length; i++) {
    if (keys[i] === 'name') {
      obj2["name"] = obj["name"];
    }
    if (keys[i] === 'age') {
      obj2["age"] = obj["age"];
    }
    }
    return obj2;
  }



// Define a function named merge that takes in two arguments.
//    arr1 (array of sorted numbers)
//    arr2 (array of sorted numbers)
//
// Return a new array that contains all the numbers in each array still sorted.
// For example, given [1, 3, 5] and [2, 4], then return [1, 2, 3, 4, 5].
function merge(arr1, arr2) {
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (var y = 0; y < arr2.length; y++) {
    arr3.push(arr2[y]);
  }
  arr3.sort(function(a, b) {
    return a - b;
  })
  return arr3;
}



// Define a function named unique that takes in one argument.
//    arr (array of strings)
//
// Return a new array that contains all the elements of arr minus any
// duplicates. For example, given ['a', 'b', 'a', 'c'], then return
// ['a', 'b', 'c'].
function unique(arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr2.indexOf(i) === -1) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
