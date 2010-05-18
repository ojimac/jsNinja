(function(){
	var queue = [], paused = false, results;

	this.test = function test(name, fn) {
		queue.push(function(){
			results = document.getElementById("results");
			results = assert( true, name ).appendChild(
				document.createElement("ul") );
			fn();
		});
		runTest();
	};

	this.pause = function(){
		paused = true;
	};

	this.resume = function(){
		paused = false;
		setTimeout(runTest, 1);
		//runTest();
	};

	function runTest(){
		if ( !paused && queue.length ) {
			queue.shift()();
			if ( !paused ) {
				resume();
			}
		}
	}

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
	};
})();

/*
 * ul resultの中にtest groupをliで作る
 * 各々のtest groupのtest caseは
 * test groupgroup内のulの中にliでtest case数分作られる
 */
window.onload = function() {
	test("Async test #1", function(){
		pause();
		setTimeout(function() {
			assert( true, "First assertion completed" );
			resume();
		}, 2000);
	});

	test("Async test #2", function(){
		//pause();
		resume();

		//setTimeout(function(){
			assert( true, "Second test completed" );
			resume();
		//}, 1000);
	});
};