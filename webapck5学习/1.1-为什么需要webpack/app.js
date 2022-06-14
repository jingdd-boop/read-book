(function () {
  var name = 'jing';
})();

console.log(name);
// name is not undefined

var res = (function () {
  var myname = 'wangzhihao';
  return myname;
})();

console.log(res); // 'wangzhihao'
