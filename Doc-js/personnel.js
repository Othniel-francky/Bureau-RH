document.getElementById('ajout').addEventListener('click', popup)
function popup(event) {
    document.getElementById('contactModal').style.display = 'block';
    document.querySelector('.close').addEventListener('click',close)
}

function close(){
    document.getElementById('contactModal').style.display = 'none';
}