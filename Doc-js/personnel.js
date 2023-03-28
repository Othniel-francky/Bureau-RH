document.getElementById('ajout').addEventListener('click', popup)
function popup(event) {
    document.getElementById('contactModal').style.display = 'block';
    document.querySelector('.close').addEventListener('click',close)
   
}

function close(){
    document.getElementById('contactModal').style.display = 'none';
}



document.getElementById('ajouter').addEventListener('click',save)

function save() {

    const num = document.getElementById("num");
    const name = document.getElementById("name");
    const Matricule = document.getElementById("Matricule");
    const Genre= document.getElementById("Genre");
    const Mobile = document.getElementById("Mobile");
    const Email= document.getElementById("Email");
    const Date = document.getElementById("Date");
    const Adresse= document.getElementById("Adresse");

  
    if(name.value != "" && name.value.replaceAll(" ", "") !="") {
        if(Matricule.value != "" && Matricule.value.replaceAll(" ", "") !="") {
            if(Genre.value != "" && Genre.value.replaceAll(" ", "") !="") {
                if(Mobile.value != "" && Mobile.value.replaceAll(" ", "") !="") {
                    if(Email.value != "" && Email.value.replaceAll(" ", "") !="") {
                        if(Date.value != "" && Date.value.replaceAll(" ", "") !="") {
                            if(Adresse.value != "" && Adresse.value.replaceAll(" ", "") !="") {
                                const tab = [];
                                const donneeTableau = {
                                    N : "",
                                    name : name.value,
                                    Matricule : Matricule.value,
                                    Genre : Genre.value,
                                    Mobile : Mobile.value,
                                    Email : Email.value,
                                    Date : Date.value,
                                    Adresse : Adresse.value,
                                }
                                name.value = "";
                                Matricule.value  = "";
                                Genre.value  = "";
                                Mobile.value  = "";
                                Email.value  = "";
                                Date.value  = "";
                                Adresse.value  = "";

                                if(!localStorage.getItem('name')){
                                    donneeTableau.id="N°-1"
                                    tab.push(donneeTableau);
                                    localStorage.setItem("name",JSON.stringify(tab))
                                }else{
                                    const ref = JSON.parse(localStorage.getItem("name"));
                                    donneeTableau.id="N°-"+(ref.length+1);
                                    ref.push(donneeTableau);
                                    localStorage.setItem("name",JSON.stringify(ref));
                                }


                            }else{
                                Adresse.focus()
                            }    
                        }else{
                            Date.focus()
                        }    
                    }else{
                        Email.focus()
                    }    
                }else{
                    Mobile.focus()
                }      
            }else{
                Genre.focus()
            }      
        }else{
            Matricule.focus()
        }
    }else{
        name.focus()
    }
  

}  
const tcorps = document.getElementById("tcorps");
const mesElements = localStorage.getItem("name");
if(mesElements){
    const parsed = JSON.parse(mesElements)
parsed.forEach(element => {
        const tr = document.createElement("tr");
        tr.id = `ligne-${element.id}`;
        tcorps.append(tr);

        const identifiant = document.createElement("td");
        identifiant.id = element.id;
        identifiant.textContent = element.id;
        tr.append(identifiant);

        const name = document.createElement("td");
        name.id = "name-"+element.id;
        name.textContent = element.name;
        tr.append(name);

        const Matricule = document.createElement("td");
        Matricule.id = "Matricule-"+element.id;
        Matricule.textContent = element.Matricule;
        tr.append(Matricule);

        const Genre = document.createElement("td");
        Genre.id = "Genre-"+element.id;
        Genre.textContent = element.Genre;
        tr.append(Genre);

        const Mobile = document.createElement("td");
        Mobile.id = "Mobile-"+element.id;
        Mobile.textContent = element.Mobile;
        tr.append(Mobile);

        const Email = document.createElement("td");
        Email.id = "Email-"+element.id;
        Email.textContent = element.Email;
        tr.append(Email);

        const Date = document.createElement("td");
        Date.id = "Date-"+element.id;
        Date.textContent = element.Date;
        tr.append(Date);

        const Adresse = document.createElement("td");
        Adresse.id = "Adresse-"+element.id;
        Adresse.textContent = element.Adresse;
        tr.append(Adresse);

        const colbotton = document.createElement("td");
        colbotton.id = "colbotton-"+element.id;
        tr.append(colbotton);

        const mbotton = document.createElement("button");
        mbotton.id = "Info-"+element.id;
        mbotton.textContent = "Info";
        colbotton.append(mbotton);

        const sbotton = document.createElement("button");
        sbotton.addEventListener("click", (e) => {
          console.log("click");
          const f = parsed.filter((el) => el.id !== element.id);
          console.log("f", f);
          localStorage.setItem("name", JSON.stringify(f));
          window.location.reload();
        });
        
        sbotton.id = "supprimer-"+element.id;
        sbotton.textContent = "Supprimer";
        colbotton.append(sbotton);
        
    })

    
}

