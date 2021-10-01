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
    formData["Gender"] = document.querySelector('input[name="gender"]:checked').value;
    formData["Hobby"] = document.querySelector('.hobby').value;
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
    var gender= document.getElementsByClassName("Gender");
    for(var index=0;index<gender.length;index++)
     {  gender[index].checked = false;}
    document.getElementById("Hobby").value="";    
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Age").value = selectedRow.cells[1].innerHTML;
    var gender=selectedRow.cells[2].innerHTML;
    if(gender=="male")
        document.getElementById("Male").checked=true;
    else if(gender=="female")
        document.getElementById("Female").checked=true;
    else
        document.getElementById("other").checked=true;
    document.getElementById("Hobby").value = selectedRow.cells[3].innerHTML;
           
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
    var regex=/^[a-zA-Z]+$/;
    var name=document.getElementById("fullName").value;
    if ( name== "") {
        alert("Enter your FullName");
        return false;
    } 
    else if(regex.test(name)==false || name.length<2)
    {
        alert("Please Check your name");
        return false;
    }
    var age=document.getElementById("Age").value;
    if(age<18 || age>60  || age==null)
    {
        alert("Please Enter valid age");
        return false;
    } 
    var radioselect=document.querySelector('input[name="gender"]:checked');
    if(radioselect==null)
    {
        alert("Please select gender ");
        return false;
    }
    var hobby= document.getElementById("Hobby"); 
    var selectedhobby=hobby.options[hobby.selectedIndex].value;
        if (selectedhobby=="") {
            alert("Please select a option");
            return false;
        }
    return true;
}