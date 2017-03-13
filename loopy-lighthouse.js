
function loopy(range, multiple, words) {
  for ( var i = range[0]; i <= range[1]; i++ ) {
    var output = i;
    if ( output % multiple [0] === 0 && output % multiple [1] === 0){
      output = words[0] + words[1];
    }
    else if ( output % multiple[0] === 0 ) {
      output = words[0];
    }
    else if ( output % multiple[1] === 0 ) {
      output = words[1];
    }
    console.log(output);
  }
}
var range = [15, 90],
    multiple = [2, 5],
    words = ["Batty", "Beacon"];

loopy(range, multiple, words);
