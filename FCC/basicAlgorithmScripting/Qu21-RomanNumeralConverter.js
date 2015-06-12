function convert(num) {
    var result = [];
    var roman = ['M', 'D', 'C', 'L', 'X', 'IX', 'V', 'IV', 'I'];
    var breakdown = breakdownNum(num);
    for(var i = 0; i < breakdown.length; i++){
        var temp = breakdown[i];
        if(temp > 0){
            for(var j = 0; j < temp; j++){
                result.push(roman[i]);
            }
            
        }
    }
    
    return result.join('');
    
}

function breakdownNum(value) {
    var result = [];
    var thousands = 0;
    var fivehundreds = 0;
    var hundreds = 0;
    var fifties = 0;
    var tens = 0;
    var nines = 0;
    var fives = 0;
    var fours = 0;
    var ones = 0;

    while (value > 0) {
        if (value > 1000) {
            thousands = parseInt(value / 1000);
            value = value % 1000;
        }else{
            if(value > 500){
                fivehundreds = parseInt(value / 500);
                value = value % 500;
            }else{
                if(value > 100){
                    hundreds = parseInt(value / 100);
                    value = value % 100;   
                }else{
                    if(value > 50){
                        fifties =  parseInt(value / 50);
                        value = value % 50;   
                    }else{
                        if(value > 10){
                            tens =  parseInt(value / 10);
                            value = value % 10;
                        }else{
                            if(value > 5){
                                if(value === 9){
                                     nines++; 
                                     value = 0;
                                }else{
                                    fives =  parseInt(value / 5);
                                    value = value % 5;
                                }                           
                            }else{
                                if(value === 5){
                                    fives++; 
                                    value = 0;
                                }else{
                                    if(value === 4){
                                        fours++;
                                        value = 0;
                                    }else{
                                        ones = value;
                                        value = 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    result.push(thousands);
    result.push(fivehundreds);
    result.push(hundreds);
    result.push(fifties);
    result.push(tens);
    result.push(nines);
    result.push(fives);
    result.push(fours);
    result.push(ones);

    return result;
}

convert(19);