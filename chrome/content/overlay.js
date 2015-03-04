function startup() {
	var button = document.getElementById("my-button");
	button.addEventListener("click", showUser);
}

window.addEventListener("load", function(e) { 
	startup(); 
}, false);

function showUser(){
	var username;
	var password;
	
	try { 
		//invocation du login manager
		var lm = Components.classes["@mozilla.org/login-manager;1"].getService( 
			Components.interfaces.nsILoginManager
		);
		
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
	
	window.alert("Hello "+username+" !");
}
