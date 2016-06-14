var flag=0;
var firstNumber=document.getElementById('Firstnumber');
var znak=document.getElementById('Znak');
var secondNumber=document.getElementById('Secondnumber');
var rezultat=document.getElementById('Rezultat');

document.getElementById('btn0').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '0';
	}
	if(flag== 1){
		secondNumber.value+= '0';
	}
}
document.getElementById('btn1').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '1';
	}
	if(flag== 1){
		secondNumber.value+= '1';
	}
}
document.getElementById('btn2').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '2';
	}
	if(flag== 1){
		secondNumber.value+= '2';
	}
}
document.getElementById('btn3').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '3';
	}
	if(flag== 1){
		secondNumber.value+= '3';
	}
}
document.getElementById('btn4').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '4';
	}
	if(flag== 1){
		secondNumber.value+= '4';
	}
}
document.getElementById('btn5').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '5';
	}
	if(flag== 1){
		secondNumber.value+= '5';
	}
}
document.getElementById('btn6').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '6';
	}
	if(flag== 1){
		secondNumber.value+= '6';
	}
}
document.getElementById('btn7').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '7';
	}
	if(flag== 1){
		secondNumber.value+= '7';
	}
}
document.getElementById('btn8').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '8';
	}
	if(flag== 1){
		secondNumber.value+= '8';
	}
}
document.getElementById('btn9').onclick=function(event){
	if(flag== 0){
		firstNumber.value+= '9';
	}
	if(flag== 1){
		secondNumber.value+= '9';
	}
}
document.getElementById('btnC').onclick=function(event){
		firstNumber.value = '';
		znak.value ='';
		secondNumber.value = '';
		rezultat.value = '';
}
document.getElementById('btnPlus').onclick=function(event){
	flag='1';
	znak.value='+';
}
document.getElementById('btnMinus').onclick=function(event){
	flag='1';
	znak.value='-';
}
document.getElementById('btnMul').onclick=function(event){
	flag='1';
	znak.value='*';
}
document.getElementById('btnDiv').onclick=function(event){
	flag='1';
	znak.value='/';
}
document.getElementById('btnRavno').onclick=function(event){
	flag = 0;
	if(znak.value == '+'){
		rezultat.value = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
	}
	if(znak.value == '-'){
		rezultat.value = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
	}
	if(znak.value == '*'){
		rezultat.value = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
	}
	if(znak.value == '/'){
		rezultat.value = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
	}
}