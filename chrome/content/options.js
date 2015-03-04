//Invocation de LoginManager
var lm = Components.classes["@mozilla.org/login-manager;1"].getService( 
	Components.interfaces.nsILoginManager
);

function onLoad(){
	var username;
	var password;
	let passwd = document.getElementById("passwd").value;
	let login = document.getElementById("login").value;
	
	try { 
		//Recherche selon les critères
		//var logins = lm.findLogins({}, hostname, formSubmitURL, httprealm);
		var logins = lm.getAllLogins({});
		//Recherche en fonction du tableau renvoyé
		for (var i = 0; i < logins.length; i++) {
			//if (logins[i].username == username) {
				password = logins[i].password;
				username = logins[i].username;
				//break;
			//}
		}
	}
	//Si il ne trouve rien
	catch(ex) {
		window.alert("This will only happen if there is no nsILoginManager component class");
	}
	passwd.value = password;
	login.value = username;
}

//A la validation du formulaire 
function onDialogAccept(){
	//Rien ne se passe, la fanêtre se ferme
}

//En cliquant sur le bouton cancel
function onDialogCancel(){
	//Rien ne se passe, la fanêtre se ferme
}
