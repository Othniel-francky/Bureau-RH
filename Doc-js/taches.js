//document.querySelector('.addContactButton').addEventListener('click', )

document
  .getElementById("ajout")
  .addEventListener("click", function popup(event) {
    document.getElementById("contactModal").style.display = "block";
    document.querySelector(".close").addEventListener("click", close);

    function close() {
      document.getElementById("contactModal").style.display = "none";
    }
  });

document.getElementById("ajouter").addEventListener("click", save);
function save() {
  const Taches = document.getElementById("Taches");
  const Priorites = document.getElementById("Priorites");
  const Pourcentage = document.getElementById("Pourcentage");
  const Axe = document.getElementById("Axe");
  const categorie = document.getElementById("categorie");
  const Paiement = document.getElementById("Paiement");

  if (Taches.value != "" && Taches.value.replaceAll(" ", "") != "") {
    if (Priorites.value != "" && Priorites.value.replaceAll(" ", "") != "") {
      if (
        Pourcentage.value != "" &&
        Pourcentage.value.replaceAll(" ", "") != ""
      ) {
        if (Axe.value != "" && Axe.value.replaceAll(" ", "") != "") {
          if (
            categorie.value != "" &&
            categorie.value.replaceAll(" ", "") != ""
          ) {
            if (
              Paiement.value != "" &&
              Paiement.value.replaceAll(" ", "") != ""
            ) {
              const tab = [];
              const donneTaches = {
                id: "",
                nom: Taches.value,
                Priorites: Priorites.value,
               Materiel: Pourcentage.value,
                Axe: Axe.value,
                categorie: categorie.value,
                paiement: Paiement.value,
              };
              Taches.value = "";
              Priorites.value = "";
              Pourcentage.value = "";
              Axe.value = "";
              categorie.value = "";
              Paiement.value = "";

              if (!localStorage.getItem("Taches")) {
                donneTaches.id = "TA-1";
                tab.push(donneTaches);
                localStorage.setItem("Taches", JSON.stringify(tab));
              } else {
                const ref = JSON.parse(localStorage.getItem("Taches"));
                donneTaches.id = "TA-" + (ref.length + 1);
                ref.push(donneTaches);
                localStorage.setItem("Taches", JSON.stringify(ref));
              }
            } else {
              Paiement.focus();
            }
          } else {
            categorie.focus();
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
const mesTaches = localStorage.getItem("Taches");
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
    tache.textContent = element.nom;
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
    typo.id = "categorie-" + element.id;
    typo.textContent = element.categorie;
    tr.append(typo);
    console.log(element.categorie);

    const paye = document.createElement("td");
    paye.id = "paiement-" + element.id;
    paye.textContent = element.paiement;
    tr.append(paye);

    const colbotton = document.createElement("td");
    colbotton.id = "colbotton-" + element.id;
    tr.append(colbotton);

    const mbotton = document.createElement("button");
    mbotton.id = "modifier-" + element.id;
    mbotton.textContent = "Modifier";
    colbotton.append(mbotton);

    const sbotton = document.createElement("button");
    sbotton.addEventListener("click", (e) => {
      const f = parsed.filter((el) => el.id !== element.id);
      console.log("f", f);
      localStorage.setItem("Taches", JSON.stringify(f));
      window.location.reload();
    });
    sbotton.id = "supprimer-" + element.id;
    sbotton.textContent = "Supprimer";
    colbotton.append(sbotton);
  });
}










document.getElementById("affecte").addEventListener("click", function popup(event) {
    document.getElementById("contactezModal1").style.display = "block";
    document.querySelector(".close1").addEventListener("click", close);

    function close() {
      document.getElementById("contactezModal1").style.display = "none";
    }
  });

// document.getElementById("ajouter1").addEventListener("click", egstr)
// function egstr() {
//     const Taches1 = document.getElementById("Taches1");
//     const Personne = document.getElementById("Personne");
//     const Materiel = document.getElementById("Materiel");
//     const Description = document.getElementById("Description"); 
//     const Durée = document.getElementById("Durée");
//     const Paie = document.getElementById("Paie");

//     if (Taches1.value != "" && Taches1.value.replaceAll(" ","") != "") {
//         if (Personne.value != "" && Personne.value.replaceAll(" ","") != "") {
//             if (Materiel.value != "" && Materiel.value.replaceAll(" ","") != "") {
//                 if (Description.value != "" && Description.value.replaceAll(" ","") != "") {
//                     if (Durée.value != "" && Durée.value.replaceAll(" ","") != "") {
//                         if (Paie.value != "" && Paie.value.replaceAll(" ","") != "") {
//                             const tab = [];
//                             const donnerTaches = {
//                                 id: "",
//                                 Taches1: Taches1.value,
//                                 Personne: Personne.value,
//                                 Materiel: Materiel.value,
//                                 Description: Description.value,
//                                 Durée: Durée.value,
//                                 Paie: Paie.value,
//                             };

//                             Taches1.value = "";
//                             Personne.value = "";
//                             Materiel.value = "";
//                             Description.value = "";
//                             Durée.value = "";
//                             Paie.value = "";
                            
//                             if (!localStorage.getItem("Taches1")) {
//                                 donnerTaches.id = "TA-1";
//                                 tab.push(donnerTaches);
//                                 localStorage.setItem("Taches1", JSON.stringify(tab));
//                               } else {
//                                 const ref = JSON.parse(localStorage.getItem("Taches1"));
//                                 donnerTaches.id = "TA-" + (ref.length + 1);
//                                 ref.push(donnerTaches);
//                                 localStorage.setItem("Taches1", JSON.stringify(ref));
//                               }

//                         }else{
//                             Paie.focus();
//                         }
//                     }else{
//                         Durée.focus();
//                     }
//                 }else{
//                     Description.focus();
//                 }
//             }else{
//                 Materiel.focus();
//             }
//         }else{
//             Personne.focus();
//         }
//     }else{
//         Taches1.focus();
//     }
// }

const corps = document.getElementById("tcorps");
const meTaches = localStorage.getItem("Taches1");


if(localStorage.name){
    const select = document.getElementById("Personne");
    JSON.parse(localStorage.name).forEach(cle => {
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




