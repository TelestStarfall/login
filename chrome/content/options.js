//Invocation de LoginManager
var lm = Components.classes["@mozilla.org/login-manager;1"].getService( 
	Components.interfaces.nsILoginManager
);
var nsLoginInfo = new Components.Constructor(
	"@mozilla.org/login-manager/loginInfo;1",
	Components.interfaces.nsILoginInfo,
	"init"
);
var hostname = 'http://myserv';
var formSubmitURL = 'null';
var httprealm = 'http://myserv';

function onLoad(){
	let passwd = document.getElementById("passwd");
	let login = document.getElementById("login");
	var username = "";
	var password = "";
	
	try { 
		//Recherche selon les critères
		var logins = lm.findLogins({}, hostname, formSubmitURL, httprealm);
		//var logins = lm.getAllLogins({});
		//Recherche en fonction du tableau renvoyé
		for (var i = 0; i < logins.length; i++) {
			if (logins[i].username) {
				password = logins[i].password;
				username = logins[i].username;
				break;
			}
		}
	}
	//Si il ne trouve rien
	catch(ex) {
		password = "";
		username = "";
	}
	
	passwd.value = password;
	login.value = username;
}

//A la validation du formulaire 
function onDialogAccept(){
	var login = document.getElementById("login").value;
 	var passwd = document.getElementById("passwd").value;
	
	var extLoginInfo = new nsLoginInfo(
		hostname,
		formSubmitURL,
		httprealm,
		login,
		passwd,
		"",
		""
	);
	lm.addLogin(extLoginInfo);
}

//En cliquant sur le bouton cancel
function onDialogCancel(){
	//Rien ne se passe, la fanêtre se ferme
}
