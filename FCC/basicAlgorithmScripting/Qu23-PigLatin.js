/**
* Created with FreeCodeCamp.
* User: imanuelgittens
* Date: 2015-06-02
* Time: 02:03 AM
* To change this template use Tools | Templates.
*/

function translate(str) {
    var arr = str.split('');
    if(vowel(arr[0])){
        arr.push('way');
        var result1 = arr.join('');
        return result1;
    }else{
        var x = '';
        for(var i = 0; i < arr.length; i++){
            var temp = arr[i];
            if(!vowel(temp)){
                x = arr.shift();
                arr.push(x);
                i--;
            }else{
                break;
            }
        }
        arr.push('ay');
        var result2 = arr.join('');
        return result2;
    }
    
}

function vowel(value){
    if(value ==='a'|| value==='A'||value ==='e'|| value==='E'||value ==='i'|| value==='I'||value ==='o'|| value==='O'||value ==='u'|| value==='U'){
        return true;
    }else{
        return false;
    }
}

translate("acconsonant");
