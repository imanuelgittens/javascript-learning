/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-05-13
* Time: 11:01 PM
* To change this template use Tools | Templates.
*/
function findLongestWord(str) {
    var max = 0;
    var strArray = str.split('');
    var temp = '';
    for(var i = 0; i < strArray.length; i++){
        if(/^[a-zA-Z]+$/.test(strArray[i])){
            temp = temp + strArray[i];
        }else{
            if(temp.length > max){
                max = temp.length;
                temp = '';
            }else{
                temp = '';
            }
        
        }
    }
  return max;
}

findLongestWord('The quick brown fox jumped over the lazy dog');