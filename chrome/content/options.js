//Invocation de LoginManager
var lm = Components.classes["@mozilla.org/login-manager;1"].getService( 
	Components.interfaces.nsILoginManager
);

//Constructeur
var nsLoginInfo = new Components.Constructor(
	"@mozilla.org/login-manager/loginInfo;1",
	Components.interfaces.nsILoginInfo,
	"init"
);  
//Variables d'utilisation
var hostname = 'chrome://firefoo';
var formSubmitURL = 'null';
var httprealm = 'User Registration';
var username;
var password;
var login = document.getElementById("login").value;
var passwd = document.getElementById("passwd").value;

try { 
	//Recherche selon les critères
	var logins = lm.findLogins({}, hostname, formSubmitURL, httprealm);
	
	//Recherche en fonction du tableau renvoyé
	for (var i = 0; i < logins.length; i++) {
		if (logins[i].username == username) {
			password = logins[i].password;
			break;
		}
	}
	
	passwd = password; 
}
//Si il ne trouve rien
catch(ex) {
	window.alert("This will only happen if there is no nsILoginManager component class");
}

//A la validation du formulaire 
function onDialogAccept(){
	
	
	var extLoginInfo = new nsLoginInfo(
	hostname,
	formSubmitURL,
	httprealm,
	login,
	passwd,
	"",
	""
);
	pm.addLogin(extLoginInfo);
}

//En cliquant sur le bouton cancel
function onDialogCancel(){
	//Rien ne se passe, la fanêtre se ferme
}
