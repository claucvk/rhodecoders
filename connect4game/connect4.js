turn = "blue"

var a = [0,0,0,0,0,0]
var b = [0,0,0,0,0,0]
var c = [0,0,0,0,0,0]
var c = [0,0,0,0,0,0]
var d = [0,0,0,0,0,0]
var e = [0,0,0,0,0,0]
var f = [0,0,0,0,0,0]

function dropper(col) {
  switch (col) {
    case "a" :
      colvalues = a.slice();
      break;
    case "b" :
      colvalues = b.slice();
      break;
    case "c" :
      colvalues = c.slice();
      break;
    case "d" :
      colvalues = d.slice();
      break;
    case "e" :
      colvalues = e.slice();
      break;
    case "f" :
      colvalues = f.slice();
      break;
    case "g" :
      colvalues = g.slice();
      break;
    default:
      var colvalues = [];
  }
}
