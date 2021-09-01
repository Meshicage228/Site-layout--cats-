let button = document.querySelector(".button");
button.addEventListener("click", function(){
	console.log("clicked button");
})

let buttonNovigation = document.querySelectorAll(".novigation");
for(let buttonNovigationAll of buttonNovigation){
	buttonNovigationAll.addEventListener("click", function(){
	console.log("clicked", buttonNovigationAll.text);
})}

let soderzhanie = document.querySelectorAll(".contentPoints");
for(let pointsCounter of soderzhanie){
	pointsCounter.addEventListener("click", function(){
		console.log("clicked");
	})
}
