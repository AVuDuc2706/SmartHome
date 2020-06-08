
function login() {   
    var login = {       
        user: document.getElementById("username").value,
        pass: document.getElementById("password").value,
        };
    if(login.user==''||login.pass=='')
    { 
        alert('Enter your Username and Password');      
    }else{
        axios.post("https://cors-anywhere.herokuapp.com/http://apithcntt03.gear.host/api/LoginAccount",login).then((response) => {  
        var result = response.data;
        if (result) {       
            var user1=JSON.stringify(login.user).replace(/"/g,'');
            alert('Login Success');
            localStorage.setItem("user",user1);
            localStorage.setItem("token",result);
            window.location='Status.html';      
        } else {
            alert('Wrong User name or Password');
        }
        });
    }
}
function userinfo(){
    var user1=localStorage.getItem("user");
    var result=localStorage.getItem("token");
    if(result==null&&user1==null){
        alert("Please Login");
        window.location='Login.html';
    }else{
        var userinfo=document.getElementById("userinfo").innerHTML=user1; 
    }  
}



function logout(){
    alert('Log Out Success');
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location='Home.html';
}

function check(){
    var user1=localStorage.getItem("user");
    var result=localStorage.getItem("token");
    if(user1!=null && result!=null)
    {
        window.location='Status.html';
    }
}
