const button_login = document.querySelector('button')
button_login.onclick = (e) =>{
    e.preventDefault();
   // toutes les données d'entrée ont reçu cette variable
    const Email= document.querySelector('#Email').value;
    const Pass = document.querySelector('#pass').value;
    
    //stockez maintenant ces données dans la boutique de votre navigateur Web
    localStorage.setItem('Email ID',Email );
    localStorage.setItem('pass',Email );

    //maintenant, écrivez une condition

    if (Email == "" && Pass == "") {
        swal("Opps..!", "Input field must be fill!", "error");
    } 
    else{
        if (Email !== Pass ) {
            swal("Opps..!", "Input field must be fill!", "error");
        } else{
            swal("Good job!", "You clicked the button!", "success");
        }
    }
}