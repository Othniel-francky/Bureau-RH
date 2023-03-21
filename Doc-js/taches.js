//document.querySelector('.addContactButton').addEventListener('click', )

document.getElementById('ajout').addEventListener('click', popup)
function popup(event) {
    document.getElementById('contactModal').style.display = 'block';
    document.querySelector('.close').addEventListener('click',close)
}

function close(){
    document.getElementById('contactModal').style.display = 'none';
}

document.querySelector('.addContactButton').addEventListener('click',saveTache)
function saveTache(){
    const name = document.getElementById('name');
    const tache = document.getElementById('tache');
    const Priorités = document.getElementById('Priorités');
    const taxeAmeliorationaches = document.getElementById("Axe d'Amelioration");
    const TypesTaches = document.getElementById('Types de Taches');
    const typePaiement = document.getElementById('Type de Paiement');

    document.querySelector('tache');
    document.querySelector('Priorités');
    document.querySelector("Axe d'Amelioration");
    document.querySelector('Types de Taches');
    document.querySelector('Type de Paiement');
    const  Pourcentage = document.getElementById('Pourcentage');
}