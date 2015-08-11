function pairwise(arr, arg) {
  var indices = [0];
  for (x = 0; x < arr.length; x++)
    for (y = x + 1; y < arr.length; y++)
      if (arr[x] + arr[y] === arg) {
        indices.push(x, y);
        arr[x] = 'null';
        arr[y] = 'null';
      }
  return indices.reduce(function(a, b) {
    return a + b;
  });
}

pairwise([1,4,2,3,0,5], 7);