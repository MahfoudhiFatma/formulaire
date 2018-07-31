function valid(){
    let name= document.getElementById('contactName').value;
    let adr=document.querySelector('#contactAdr').value;
    let email = document.querySelector('#contactEmail').value;
    let pwd=document.querySelector('#contactPwd').value;
    if (name == ""){
        alert("Please enter your name");
        
    }
    if (adr == ""){
        alert("Please enter your adresse");
        
    }
    if (validateEmail(email) == false) {
        
        alert( "Please enter a valid adress email ");
        
    }

    var letters = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(pwd.match(letters))
    {
        return true;
    }
    else
    {
        alert('password must have alphanumeric characters only and should contains 8 characters or more');
 
    }

    
}
function validateEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


   
