document.getElementById('ajout').addEventListener('click', popup)
function popup(event) {
    document.getElementById('contactModal').style.display = 'block';
    document.querySelector('.close').addEventListener('click',close)
}

function close(){
    document.getElementById('contactModal').style.display = 'none';
}

function validateForm() {
    let num = document.getElementById("num").value;
    let name = document.getElementById("name").value;
    let Matricule = document.getElementById("Matricule").value;
    let Genre= document.getElementById("Genre").value;
    let Mobile = document.getElementById("Mobile").value;
    let Email= document.getElementById("Email").value;
    let Date = document.getElementById("Date").value;
    let Adresse= document.getElementById("Adresse").value;
    let Action = document.getElementById("Action").value;
    

    if (num == "") {
        alert("num is required");
        return false;
    }
    if (name == "") {
        alert("name is required");
        return false;
    }
    if (Matricule == "") {
        alert("Matricule is required");
        return false;
    }
    if (Genre == "") {
        alert("Genre is required");
        return false;
    }
    if (Mobile == "") {
        alert("Mobile is required");
        return false;
    }
    if (Email == "") {
        alert("Email is required");
        return false;
    } 
    else if(!Email.includes("@")){
        alert("Email invalid");
        return false;
    }
    if (Date == "") {
        alert("Date is required");
        return false;
    }
    if (Adresse == "") {
        alert("Adresse is required");
        return false;
    }
    if (Action == "") {
        alert("Action is required");
        return false;
    }

    return true;
}

function showData() {
    var peopleList;
    if (localStorage.getItem("peopleList")==null) {
        peopleList = [];
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    const html = "";
    peopleList.forEach(function(element,index){
        html += "<tr>";
        html += "<td>" + element.num + "</td>"
        html += "<td>" + element.name + "</td>"
        html += "<td>" + element.Matricule + "</td>"
        html += "<td>" + element.Genre + "</td>"
        html += "<td>" + element.Mobile + "</td>"
        html += "<td>" + element.Email + "</td>"
        html += "<td>" + element.Date + "</td>"
        html += "<td>" + element.Adresse + "</td>"
        html += "<td>" + element.Action + "</td>"
        html += 
        '<td><button onclick="deleteData(' + index +
         ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + 
         ')" class="btn btn-warning m-2">Edit</button></td>';
        html +="</tr>";
    });

    document.querySelector("#ajtTable tbody").innerHTML = 
    html;
}
//charge toutes les données lors du chargement de documents ou de pages

document.onload = showData();

//fonction pour ajouter des données
function addData() {
//si le formulaire est validé

    if (validateForm() == true) {
        let num = document.getElementById("num").value;
        let name = document.getElementById("name").value;
        let Matricule = document.getElementById("Matricule").value;
        let Genre= document.getElementById("Genre").value;
        let Mobile = document.getElementById("Mobile").value;
        let Email= document.getElementById("Email").value;
        let Date = document.getElementById("Date").value;
        let Adresse= document.getElementById("Adresse").value;
        let Action = document.getElementById("Action").value;

        var peopleList;
        if (localStorage.getItem("peopleList")==null) {
            peopleList = [];
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"))
        }

        peopleList.push({
            num : num,
            name : name,
            Matricule : Matricule,
            Genre : Genre,
            Mobile : Mobile,
            Email : Email,
            Date : Date,
            Adresse : Adresse,
            Action : Action,
        })

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("num").value = "";
        document.getElementById("name").value = "";
        document.getElementById("Matricule").value = "";
        document.getElementById("Genre").value = "";
        document.getElementById("Mobile").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Date").value = "";
        document.getElementById("Adresse").value = "";
        document.getElementById("Action").value = "";
    }
}