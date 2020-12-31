let age = document.getElementById("age");

setInterval(() => {
	let time = (new Date() - new Date(1012618800000)) / (1000 * 60 * 60 * 24 * 365.25);
	age.innerText = time.toString().substring(0, 12);
}, 50);