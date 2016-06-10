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

document.getElementById('submit').onclick = function(event){
	return validation();
}

function validation(){
	var login=document.getElementById('login');
	var loginLeght=login.value;
	var pass=document.getElementById('pass');
	var passLeght=pass.value;
	var Loginflag = false;
	var Passflag = false;
	if(login.value == ''){
		Loginflag = false;
		login.classList.add('error');
	}else{
		Loginflag = true;
		login.classList.remove('error');
	}
	if(login.value == ''){
		Passflag = false;
		pass.classList.add('error');
	}else{
		Passflag = true;
		pass.classList.remove('error');
	}
	if(Loginflag == true && Passflag){
		return true;
	}else{
		return false;
	}
}