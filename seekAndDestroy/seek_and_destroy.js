var args;

function makeArgsArray(args) {
  args = (args.length === 1 ?
    [args[0]] :
    Array.apply(null, args));
  return args
}

function argFilter(item) {
    return args.indexOf(item) < 0;
}


function destroyer(arr) {
   args = makeArgsArray(arguments);
  return arr.filter(argFilter);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)