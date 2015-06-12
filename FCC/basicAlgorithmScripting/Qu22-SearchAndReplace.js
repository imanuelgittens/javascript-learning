/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-02
* Time: 12:56 AM
* To change this template use Tools | Templates.
*/

function replace(str, before, after) {
  var index = str.indexOf(before);
  var firstChar = before.charAt(0);
  if(firstChar === before.charAt(0).toUpperCase()){
      var afterArr = after.split('');
      afterArr[0] = afterArr[0].toUpperCase();
        var finalAfter = afterArr.join('');
        var newstring = str.replace(before, finalAfter);
        return newstring;

  }else{
      var newstring1 = str.replace(before, after);
      return newstring1;
  }
}

replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");