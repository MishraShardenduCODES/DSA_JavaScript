let map = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i], i);
      result.push(fn(arr[i], i));
    }
    return result;
  };