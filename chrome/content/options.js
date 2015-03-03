function onDialogAccept()
{
	var login = document.getElementById("login").value;
	var passwd = document.getElementById("passwd").value;
	
	window.alert(passwd);
	window.alert(login);
	
	Services.prefs.setIntPref("extensions.button_login.login", parseInt(login));
	Services.prefs.setIntPref("extensions.button_login.password", parseInt(passwd));
}

function onDialogCancel(){

}
