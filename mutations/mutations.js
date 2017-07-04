function mutation(arr) {
  var first = arr[0].toLowerCase().split('');
  var second = arr[1].toLowerCase().split('');
  return second.every(function(item) {
    return first.indexOf(item) >= 0;
  });
}

mutation(["hello", "hey"])
mutation(["Alien", "Line"])
