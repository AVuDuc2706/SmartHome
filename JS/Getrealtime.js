
function getstatus(){ 
    var user1=localStorage.getItem("user");
    var userinfo=document.getElementById("userinfo").innerHTML=user1;
    var result=localStorage.getItem("token");
    if(result==null&&user1==null){
        alert('Please Login');
    }else{
        setInterval(function(){ 
        axios.get("http://apithcntt03.gear.host/api/getrealtime?isfire=0&user="+user1+"&token="+result).then((response)=>{     
       //setInterval(function(){
       //axios.get("http://realestates.gear.host/api/realestate").then((response)=>{
        var stt=response.data;      
            var rows = "";
            rows += "<tr style='cursor:pointer'>";
            rows += "<td>" + stt.data.PhatHienChay + "</td>";
            rows += "<td>" + stt.data.PhatHienDotNhap + "</td>";
            rows += "</tr>";
            var header = "<tr><th>Cảm biến nhiệt</th><th>Cảm biết đột nhập</th>";
            document.getElementById("status").innerHTML = header + rows;
        console.log(stt);     
        }); 
    },2000); 
    //},2000);         
   // } 
        }   
}
