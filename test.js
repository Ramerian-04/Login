function LogIn(){
    const name="providence";
    const passkey=1234;


    var username=document.getElementById('Username').value;
    var password=document.getElementById('Password').value;

    if(name==username&&passkey==password){
        
        
        link1()

    }else{

        alert("Invalid Username or Password")
    }

}

function link1() {


    window.open(document.getElementById("link1").href);

}