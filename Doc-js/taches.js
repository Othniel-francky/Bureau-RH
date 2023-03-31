//document.querySelector('.addContactButton').addEventListener('click', )

document.getElementById("ajout").addEventListener("click", function popup(event) {
    document.getElementById("contactModal").style.display = "block";
    document.querySelector(".close").addEventListener("click", close);

    function close() {
      document.getElementById("contactModal").style.display = "none";
    }
  });

document.getElementById("ajouterTache").addEventListener("click", enregistrerTache);
function enregistrerTache() {
  const Taches = document.getElementById("Taches");
  const Priorites = document.getElementById("Priorites");
  const Pourcentage = document.getElementById("Pourcentage");
  const Axe = document.getElementById("Axe");
  const Types = document.getElementById("types");
  const Paiement = document.getElementById("Paiement");
  console.log(Taches)

  if (Taches.value != "" && Taches.value.replaceAll(" ", "") != "") {
    if (Priorites.value != "" && Priorites.value.replaceAll(" ", "") != "") {
      if (
        Pourcentage.value != "" &&
        Pourcentage.value.replaceAll(" ", "") != ""
      ) {
        if (Axe.value != "" && Axe.value.replaceAll(" ", "") != "") {
          if (
            Types.value != "" &&
            Types.value.replaceAll(" ", "") != ""
          ) {
            if (
              Paiement.value != "" &&
              Paiement.value.replaceAll(" ", "") != ""
            ) {
              const tab = [];
              const donneTaches = {
                id: "",
                libelle: Taches.value,
                Priorites: Priorites.value,
               Materiel: Pourcentage.value,
                Axe: Axe.value,
                Types: Types.value,
                paiement: Paiement.value,
                statut: 1,
              };
              Taches.value = "";
              Priorites.value = "";
              Pourcentage.value = "";
              Axe.value = "";
              Types.value = "";
              Paiement.value = "";

              if (!localStorage.getItem("TACHES")) {
                donneTaches.id = "TA-1";
                tab.push(donneTaches);
                localStorage.setItem("TACHES", JSON.stringify(tab));
              } else {
                const ref = JSON.parse(localStorage.getItem("TACHES"));
                donneTaches.id = "TA-" + (ref.length + 1);
                ref.push(donneTaches);
                localStorage.setItem("TACHES", JSON.stringify(ref));
              }
              location.reload()
            } else {
              Paiement.focus();
            }
          } else {
            Types.focus();
          }
        } else {
          Axe.focus();
        }
      } else {
        Pourcentage.focus();
      }
    } else {
      Priorites.focus();
    }
  } else {
    Taches.focus();
  }
}



const tcorps = document.getElementById("tcorps");
const mesTaches = localStorage.getItem("TACHES");
if (mesTaches) {
  const parsed = JSON.parse(mesTaches);
  parsed.forEach((element) => {
    const tr = document.createElement("tr");
    tr.id = `ligne-${element.id}`;
    tcorps.append(tr);

    const identifiant = document.createElement("td");
    identifiant.id = element.id;
    identifiant.textContent = element.id;
    tr.append(identifiant);

    const tache = document.createElement("td");
    tache.id = "nom-" + element.id;
    tache.textContent = element.libelle;
    tr.append(tache);

    const prior = document.createElement("td");
    prior.id = "Priorites-" + element.id;
    prior.textContent = element.Priorites;
    tr.append(prior);

    const pourcent = document.createElement("td");
    pourcent.id = "pourcentites-" + element.id;
    pourcent.textContent = element.pourcentages;
    tr.append(pourcent);

    const ax = document.createElement("td");
    ax.id = "axe-" + element.id;
    ax.textContent = element.Axe;
    tr.append(ax);

    const typo = document.createElement("td");
    typo.id = "Types-" + element.id;
    typo.textContent = element.Types;
    tr.append(typo);
    console.log(element.Types);

    const paye = document.createElement("td");
    paye.id = "paiement-" + element.id;
    paye.textContent = element.paiement;
    tr.append(paye);

    const colbotton = document.createElement("td");
    colbotton.id = "colbotton-" + element.id;
    tr.append(colbotton);

    const mbotton = document.createElement("button");
    mbotton.style.background= "blue";
    mbotton.style.color="white";
    mbotton.style.border="none";
      mbotton.style.fontSize="15px";
    mbotton.id = "modifier-" + element.id;
    mbotton.textContent = "Modifier";
    colbotton.append(mbotton);


    
    const sbotton = document.createElement("button");
    sbotton.style.background="red";
    sbotton.style.border="none";
    sbotton.style.fontSize="15px";
     sbotton.style.marginLeft="15px";
    sbotton.style.color="white"
    sbotton.addEventListener("click", (e) => {
      const f = parsed.filter((el) => el.id !== element.id);
      localStorage.setItem("TACHES", JSON.stringify(f));
      window.location.reload();
    })
    
    
    
    sbotton.id = "supprimer-" + element.id;
    sbotton.textContent = "Supprimer";
    colbotton.append(sbotton);
  });
}





// function suppression(event){
//   const ID = event.target.id.replace("supprimer-", "");
// }

















//PARTIR AFFECTATION DE TACHES
document.getElementById("affecte").addEventListener("click", function popup(event) {
    document.getElementById("contactezModal1").style.display = "block";
    document.querySelector(".close1").addEventListener("click", close);

    function close() {
      document.getElementById("contactezModal1").style.display = "none";
    }
  });



const corps = document.getElementById("tcorps");
const meTaches = localStorage.getItem("Taches1");

//Pour charger les taches dans le formulaire
if(localStorage.TACHES){
    const select = document.getElementById("Personne");
    JSON.parse(localStorage.PERSONNELS).filter(cle=>cle.statut != 0).forEach(cle => {
        const option = document.createElement("option");
        option.value = cle.name;
        option.textContent = cle.name;
        select.append(option);
    })
}






document.getElementById("affectationTache").addEventListener("click", affecterTaches);
function affecterTaches() {
  const libelle = document.getElementById("Taches1");
  const Personne = document.getElementById("Personne");
  const Materiel = document.getElementById("Materiel");
  const Description = document.getElementById("Description");    
  const Duree = document.getElementById("Durée");
  const Paie = document.getElementById("Paie");
  if (libelle.value != "" && libelle.value.replaceAll(" ", "") != "") {
    if (Personne.value != "" && Personne.value.replaceAll(" ", "") != "") {
      if ( Materiel.value != "" && Materiel.value.replaceAll(" ", "") != "") {
        if (Description.value != "" && Description.value.replaceAll(" ", "") != "") {
          if ( Duree.value != "" && Duree.value.replaceAll(" ", "") != "") {
            if (Paie.value != "" && Paie.value.replaceAll(" ", "") != "") {
              const tab = [];
              const donneTaches = {
                id: "",
                libelle: libelle.value,
                Personne: Personne.value,
               Materiel: Materiel.value,
                Description: Description.value,
                Duree: Duree.value,
                Paie: Paie.value,
                statut : 1,
              };
              libelle.value = "";
              Personne.value = "";
              Materiel.value = "";
              Description.value = "";
              Duree.value = "";
              Paie.value = "";

              if (!localStorage.getItem("TACHES_AFFECTER")) {
                donneTaches.id = "TAF-1";
                tab.push(donneTaches);
                localStorage.setItem("TACHES_AFFECTER", JSON.stringify(tab));
              } else {
                const ref = JSON.parse(localStorage.getItem("TACHES_AFFECTER"));
                donneTaches.id = "TAF-" + (ref.length + 1);
                ref.push(donneTaches);
                localStorage.setItem("TACHES_AFFECTER", JSON.stringify(ref));
              }
            } else {
              Paie.focus();
            }
          } else {
            Duree.focus();
          }
        } else {
          Description.focus();
        }
      } else {
        Materiel.focus();
      }
    } else {
      Personne.focus();
    }
  } else {
    libelle.focus();
  }
}




