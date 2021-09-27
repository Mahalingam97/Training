

var selectedRow = null

function onFormSubmit() {
	if (validate()) {
		var formData = readFormData();
		if (selectedRow == null)
			insertNewRecord(formData);
		else
			updateRecord(formData);
		resetForm();
	}
}

function readFormData() {
	var formData = {};
	formData["fullName"] = document.getElementById("fullName").value;
	formData["Age"] = document.getElementById("Age").value;
	formData["Gender"] = document.querySelector('input[name="gendar"]:checked').value;
	selectedElement = document.querySelector('.hobby');
	formData["Hobby"] = selectedElement.value;
	return formData;
}

function insertNewRecord(data) {
	var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
	var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.fullName;
	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.Age;
	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.Gender;
	cell4 = newRow.insertCell(3);
	cell4.innerHTML = data.Hobby;
	cell4 = newRow.insertCell(4);
	cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
	document.getElementById("fullName").value = "";
	document.getElementById("Age").value = "";
	var ele = document.getElementsByClassName("Gendar");
	for (var i = 0; i < ele.length; i++) {
		ele[i].checked = false;
	}
	var dropDown = document.getElementsByClassName("hobby");
	dropDown.selectedIndex = 0;
	selectedRow = null;
}

function onEdit(td) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
	document.getElementById("Age").value = selectedRow.cells[1].innerHTML;
}

function updateRecord(formData) {
	selectedRow.cells[0].innerHTML = formData.fullName;
	selectedRow.cells[1].innerHTML = formData.Age;
	selectedRow.cells[2].innerHTML = formData.Gender;
	selectedRow.cells[3].innerHTML = formData.Hobby;
}

function onDelete(td) {
	if (confirm('Are you sure to delete this record ?')) {
		row = td.parentElement.parentElement;
		document.getElementById("employeeList").deleteRow(row.rowIndex);
		resetForm();
	}
}

function validate() {
	isValid = true;
	if (document.getElementById("fullName").value == "") {
		isValid = false;
		alert("Enter valid Name");
		document.getElementById("fullNameValidationError").classList.remove("hide");
	} else {
		isValid = true;

	}
	var age = document.getElementById("Age").value;
	if (age < 18 && age > 60 || age == null) {
		isValid = false;
		alert("Please Enter valid age");
	} else isValid = true;

	var e = document.getElementsByClassName("hobby");
	if (e.value == "") {
		isValid = false;
		alert("Please select a option");
	} else isValid = true;


	return isValid;
}

