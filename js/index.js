/*alert( 'Привет, Мир!' );
document.getElementById('new').innerHTML="И тут тоже :P";
document.getElementById('ser').innerHTML="Опа, текст изменился :o";

document.getElementById('my-but').onclick = function(event){
	alert("Молодец");
}
function showMessage() {
	document.getElementById('alert').innerHTML="текст";
}
showMessage();*/

document.getElementById('id-but').onclick = function(event){
	validation();
}

function validation(){
	var document.getElementById('id-login');
	var document.getElementById('id-pass');
	var Lodinflag = false;
	var Passflag = false;
	if(login.value == ''){
		Lodinflag = false;
		login.classList.add('error');
	}else{
		Lodinflag = true;
		login.classList.remove('error');
	}
	if(login.value == ''){
		Passflag = false;
		pass.classList.add('error');
	}else{
		Passflag = true;
		pass.classList.remove('error');
	}
	if(Lodinflag == true && Passflag){
		return true;
	}else{
		return false;
	}
}