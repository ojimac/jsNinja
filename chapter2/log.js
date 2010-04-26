/**
* safari 4.0.5 -> 最初のtry
* ff 3.5.9 -> 最初のtry
* opera 10.10 catchの後のtry
* ie8 catchの後のcatchのalertが実行
*/
function log() {
	try {
		// safari ff
		console.log.apply( console, arguments );
	} catch(e) {
		try {
			// opera
			opera.postError.apply( opera, arguments );
		} catch(e) {
			// ie
			alert( Array.prototype.join.call( arguments, " " ) );
		}
	}
}