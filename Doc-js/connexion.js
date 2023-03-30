const button_login = document.querySelector('button')
button_login.onclick = (e) =>{
    e.preventDefault();

    const Email= document.querySelector('#Email').value;
    const Pass = document.querySelector('#pass').value;
    
    localStorage.setItem('Email ID',Email );
    localStorage.setItem('pass',Email );



    if (Email == "" && Pass == "") {
        swal("Opps..!", "Input field must be fill!", "error");
    } 
    else{
        if (Pass != Email ) {
            swal("Connexion Reussie!", "You clicked the button!", "success");
            window.location="dashboard.html"
        } else{
            swal("Opps..!", "Input field must be fill!", "error");
            
        }
    }
}