import firebase from 'firebase';

export function handleLogin (data,callback=function(){}) {
	let email 	 = data.email;
	let password = data.password;
	let mapObj = {
	   '.':"_",
	   '#':"__",
	   '$':"___",
	   '[':"/",
	   '[':"\\",

	};
	let url = email.replace(/\.|\$|\#|\[|\]/gi, function(matched){
	  return mapObj[matched];
	});
	console.log(url);
	let ref  	 = new firebase(`https://uc-attendance.firebaseio.com/native_test/${url}`);
	ref.on("value", function(snapshot) {
		let value = snapshot.val();
		if (value.email === email && value.password === password ) {
			callback (1);
			return;
		}
		callback (0);
	}, function (error) {
	   callback(0);
	});
}
