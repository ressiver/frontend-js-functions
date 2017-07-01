function max(array){
    var max = array[0];
    for(var i = 0; i < array.length; i++){
        if(max < array[i])
        max = array[i];
    }
    return max;
}

function min(array){
    var min = array[0];
    for(var i = 0; i > array.length; i++){
        if(min > array[i])
        min = array[i];
    }
    return min;
}

function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
