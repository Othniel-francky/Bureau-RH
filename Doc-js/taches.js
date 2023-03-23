//document.querySelector('.addContactButton').addEventListener('click', )

document.getElementById('ajout').addEventListener('click', popup)
function popup(event) {
    document.getElementById('contactModal').style.display = 'block';
    document.querySelector('.close').addEventListener('click',close);
}

function close(){
    document.getElementById('contactModal').style.display = 'none';
}


document.getElementById('ajouter').addEventListener('click',save);
function save() {

     const Taches = document.getElementById('Taches');
    const Priorites = document.getElementById('Priorites');
    const Pourcentage = document.getElementById('Pourcentage');
    const Axe = document.getElementById("Axe");
    const categorie = document.getElementById('categorie');
    const Paiement = document.getElementById('Paiement');

    if (Taches.value !=  "" &&  Taches.value.replaceAll(" ", "")!="") {
        if (Priorites.value !=  "" &&  Priorites.value.replaceAll(" ", "")!="") {
            if (Pourcentage.value !=  "" &&  Pourcentage.value.replaceAll(" ", "")!="") {
                if (Axe.value !=  "" &&  Axe.value.replaceAll(" ", "")!="") {
                    if (categorie.value !=  "" &&  categorie.value.replaceAll(" ", "")!="") {
                        if (Paiement.value !=  "" &&  Paiement.value.replaceAll(" ", "")!="") {
                            const tab = [];
                            const donneTaches = {
                                id : "",
                                nom : Taches.value,
                                Priorites : Priorites.value,
                                pourcentages : Pourcentage.value,
                                Axe: Axe.value,
                                categorie : categorie.value,
                                paiement : Paiement.value
                            }
                            Taches.value =  "" ;
                            Priorites.value =  "";
                            Pourcentage.value =  "";
                            Axe.value =  "";
                            categorie.value =  "";
                            Paiement.value =  "";

                            document.getElementById("contactModal").style.display = "none";


                            if (!localStorage.getItem('Taches')){
                                donneTaches.id="TA-1";
                                tab.push(donneTaches);
                                localStorage.setItem("Taches",JSON.stringify(tab));
                            }else{
                                const ref = JSON.parse(localStorage.getItem("Taches"));
                                donneTaches.id="TA-"+(ref.length+1);
                                ref.push(donneTaches);
                                localStorage.setItem("Taches",JSON.stringify(ref));
                            }
                        }else{
                            Paiement.focus()
                        }
                    }else{
                        categorie.focus()
                    }
                }else{
                    Axe.focus()
                }
            }else{
                Pourcentage.focus()
            }
        }else{
            Priorites.focus()
        }
    }else{
        Taches.focus()
    }

}
const tcorps = document.getElementById("tcorps");
const mesTaches = localStorage.getItem("Taches");
if(mesTaches){
    JSON.parse(mesTaches).forEach(element => {
        const tr = document.createElement("tr");
        tr.id = `ligne-${element.id}`;
        tcorps.append(tr);

        const identifiant = document.createElement("td");
        identifiant.id = element.id;
        identifiant.textContent = element.id;
        tr.append(identifiant);

        const tache = document.createElement("td");
        tache.id = "nom-"+element.id;
        tache.textContent = element.nom;
        tr.append(tache);

        const prior = document.createElement("td");
        prior.id = "Priorites-"+element.id;
        prior.textContent = element.Priorites;
        tr.append(prior);

        const pourcent = document.createElement("td");
        pourcent.id = "pourcentites-"+element.id;
        pourcent.textContent = element.pourcentages;
        tr.append(pourcent);

        const ax = document.createElement("td");
        ax.id = "axe-"+element.id;
        ax.textContent = element.Axe;
        tr.append(ax);

        const typo = document.createElement("td");
        typo.id = "categorie-"+element.id;
        typo.textContent = element.categorie;
        tr.append(typo);
        console.log(element.categorie)

        const paye = document.createElement("td");
        paye.id = "paiement-"+element.id;
        paye.textContent = element.paiement;
        tr.append(paye);

        const colbotton = document.createElement("td");
        colbotton.id = "colbotton-"+element.id;
        tr.append(colbotton);

        const mbotton = document.createElement("button");
        mbotton.id = "modifier-"+element.id;
        mbotton.textContent = "Modifier";
        colbotton.append(mbotton);

        const sbotton = document.createElement("button");
        sbotton.id = "supprimer-"+element.id;
        sbotton.textContent = "Supprimer";
        colbotton.append(sbotton);


    });
    
}


