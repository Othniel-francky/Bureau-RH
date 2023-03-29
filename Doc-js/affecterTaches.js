




const tcorp = document.getElementById("tcorps");
const mesTache = localStorage.getItem("TACHES_AFFECTER");
if (mesTache) {
  const parsed = JSON.parse(mesTache).filter(cle=>cle.statut==1);
  parsed.forEach((element) => {
    const tr = document.createElement("tr");
    tr.style.width="100%"
    tr.id = `ligne-${element.id}`;
    tcorps.append(tr);

    const identifiant = document.createElement("td");
    identifiant.id = element.id;
    identifiant.textContent = element.id;
    tr.append(identifiant);

    const tache = document.createElement("td");
    tache.id = "tache-" + element.id;
    tache.textContent = element.libelle;
    tr.append(tache);

    const personne = document.createElement("td");
    personne.id = "Personne-" + element.id;
    personne.textContent = element.Personne;
    tr.append(personne);

    const Description = document.createElement("td");
    Description.id = "Description-" + element.id;
    Description.textContent = element.Description;
    tr.append(Description);

    const Materiel = document.createElement("td");
    Materiel.id = "Materiel-" + element.id;
    Materiel.textContent = element.Materiel;
    tr.append(Materiel);

    const Duree = document.createElement("td");
    Duree.id = "Duree-" + element.id;
    Duree.textContent = element.Duree;
    tr.append(Duree);

    const Paie = document.createElement("td");
    Paie.id = "Paie-" + element.id;
    Paie.textContent = element.Paie;
    tr.append(Paie);

    
    const tdModif = document.createElement("td");
    tdModif.id = "tdModif-" + element.id;
    tr.append(tdModif);

    const mbotton = document.createElement("button");
    mbotton.id = "modifier-" + element.id;
    mbotton.textContent = "Modifier";
    tdModif.append(mbotton);

    const tdSuppr = document.createElement("td");
    tdSuppr.id = "tdSuppr-" + element.id;
    tr.append(tdSuppr);

    const sbotton = document.createElement("button");
    sbotton.addEventListener("click", supprimer);
    sbotton.id = "supprimer-" + element.id;
    sbotton.textContent = "Supprimer";
    tdSuppr.append(sbotton);
  });
}

function supprimer(event){
    const refer = event.target.id.replace("supprimer-", "")
    const bigData = JSON.parse(localStorage.TACHES_AFFECTER);
    const concerne = bigData.find(cle=>cle.id==refer);
    const indece = bigData.indexOf(concerne);
    concerne.statut = 0;

    bigData[indece]= concerne;
    localStorage.setItem("TACHES_AFFECTER", JSON.stringify(bigData))
    window.location.reload();
      
}


