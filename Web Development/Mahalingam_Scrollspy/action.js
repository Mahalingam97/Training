function opennorthfood() {
	document.getElementById("popup-1").classList.toggle("active");
}

function closenorthfood() {
	document.getElementById("popup-1").classList.remove("active");
}

function opensouthfood() {
	document.getElementById("popup-2").classList.toggle("active");
}

function closesouthfood() {
	document.getElementById("popup-2").classList.toggle("active");
}
var loadfile = function (event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};
var current_page = 1;
var records_per_page = 3;

var foodlist = [{
		content: "Breakfast",
		food: "idly"
	},
	{
		content: "Breakfast",
		food: "poori"
	},
	{
		content: "Breakfast",
		food: "Dosa"
	},
	{
		content: "Lunch",
		food: "Chikken Biriyani",
	},
	{
		content: "Lunch",
		food: "Mutton Biriyani",
	},
	{
		content: "Lunch",
		food: "Veg Biriyani",
	},
	{
		content: "Dinner",
		food: "Parrota"
	},
	{
		content: "Dinner",
		food: "chappathi"
	},
	{
		content: "Dinner",
		food: "eggparrota"
	}
];

function prevPage() {
	if (current_page > 1) {
		current_page--;
		changePage(current_page);
	}
}

function nextPage() {
	if (current_page < numPages()) {
		current_page++;
		changePage(current_page);
	}
}

function changePage(page) {
	var btn_next = document.getElementById("btn_next");
	var btn_prev = document.getElementById("btn_prev");
	var menu = document.getElementById("display-items");
	var page_span = document.getElementById("page");
	menu.innerHTML = "";
	if (page < 1) page = 1;
	if (page > numPages()) page = numPages();

	for (var i = (page - 1) * records_per_page; i < (page * records_per_page) && i < foodlist.length; i++) {
		menu.innerHTML += `<tr><td> ${foodlist[i].content} </td><td>${foodlist[i].food}</td></tr>`;
	}
	page_span.innerHTML = page + "/" + numPages();

	if (page == 1) {
		btn_prev.style.visibility = "hidden";
	} else {
		btn_prev.style.visibility = "visible";
	}

	if (page == numPages()) {
		btn_next.style.visibility = "hidden";
	} else {
		btn_next.style.visibility = "visible";
	}
}

function numPages() {
	return Math.ceil(foodlist.length / records_per_page);
}
window.onload = function () {
	changePage(1);
};