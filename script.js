var keys = document.getElementsByClassName("keys");
console.log(keys);
var display = document.getElementById("display-container");

//display.textContent variables
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value){
    return(value=='+'||value=='-'||value=='*'||value=='/')
}

for(var i=0;i<keys.length;i++){
    keys[i].addEventListener('click',function(){

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if(isOperator(value)){
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = ""
        }else if(value == "ac"){
            display.textContent = "";
        }else if(value == "backspace"){
            var num = parseFloat(text);
            console.log(Math.floor(num/10));
            
            display.textContent = Math.floor(num/10);
        }else if(value== '.'){
            if(!text.includes('.')){
                display.textContent = text+'.';
            }else if(!text.length){
                display.textContent = '0.';
            }
            
        }else if(value=='%'){
            operand1 = parseFloat(text);
            operand1 = operand1/100;
            display.textContent = operand1;
        }else if(value=='='){
            operand2 = parseFloat(text);
            var result = eval(operand1+' '+operator+' '+operand2);
            if(result){
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }else{
            display.textContent+=value;
        }

    });
}