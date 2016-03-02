"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
    var result;
    var original = document.getElementById("tempEntrada");
    var temp = original.value;

    var inputRegex = XRegExp ('(?<value>      ^[-+]?\\d+ (?:[\\.,]\\d*)?\\s* )     #captures the number   \n' +
                              '((e(?<exponent> [-+]?\\d+)\\s*)?)                   #captures the exponent \n' +
                              '(?<word>      ((f(?:a(?:h(?:r(?:e(?:n(?:h(?:e(?:i(?:t)?)?)?)?)?)?)?)?)?)|' +
                                            '(c(?:e(?:l(?:s(?:i(?:u(?:s)?)?)?)?)?)?))$ )', 'x');

    var m = XRegExp.exec(temp, inputRegex);
    console.log(m);
    if (m) {
        var num = parseFloat(m.value.replace(',', '.')); // Int
        console.log (num);
        var type = m[3][0];                           // String
        var exp;                                      // String
        if (!m[2]) {
            exp = "";
        }else{
            exp = "e" +   parseInt(m[2]);
        };

        if (type == 'c' || type == 'C') {
            result = ((num * 9/5)+32);
            exp += "F";
        }
        else {
            result = ((num - 32)*5/9);
            exp += "C";
        }

        var output; // String
        if (m[2]){
            output = result + exp;
        } else {
            output = result.toFixed(2) + exp;
        }
        converted.innerHTML = output;
    }
    else {
        converted.innerHTML = "ERROR! Prueba con la sintaxis '-4.2C' o '-4.2e5f'.";
    }
}
