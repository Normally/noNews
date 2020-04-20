// this is the code which will be injected into a given page...

function findClick() {

		// find element and click
  		// var findElement = document.getElementById("smphtml5iframesmp-wrapper").contentWindow.document.body.getElementsByClassName("audioButton")[2];
  		// findElement.click();
  		// console.log("clicked");
  		audio = document.getElementById("smphtml5iframesmp-wrapper").contentWindow.document.getElementById("p_a_player_0");
		curT = audio.currentTime;
		newT = curT + 240;
		audio.currentTime = newT;
		console.log(audio.currentTime);


}

findClick();
