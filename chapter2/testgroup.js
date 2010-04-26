(function(){
	var results;

	this.assert = function assert( value, desc ) {
		var li = document.createElement("li");
		li.className = value ? "pass" : "fail";
		li.appendChild( document.createTextNode( desc ) );
		results.appendChild( li );
		if ( !value ) {
			// test groupの中に失敗があったらred!
			li.parentNode.parentNode.className = "fail";
		}
		return li;
	}

	this.test = function test(name, fn) {
		results = document.getElementById("results");
		results = assert( true, name ).appendChild(
			document.createElement("ul") );
		fn();
	};
})();

/*
 * ul resultの中にtest groupをliで作る
 * 各々のtest groupのtest caseは
 * test groupgroup内のulの中にliでtest case数分作られる
 */
window.onload = function() {
	test(" A test.", function(){
		assert( true, "First assertion completed" );
		assert( true, "Second assert completed" );
		assert( true, "Third assertion completed" );
	});

	test(" Another test.", function(){
		assert( true, "First test completed" );
		assert( false, "Second test failed" );
		assert( true, "Third assertion completed" );
	});

	test(" A third test.", function(){
		assert( null, "fail" );
		assert( 5, "pass" );
	});
};