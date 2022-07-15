function Check(idname,finp){
    var f = document.getElementById(idname).value;
    // var m = document.getElementById("middle").value;
    // var l = document.getElementById("last").value;
    if(!(/^[a-zA-Z]+$/.test(f))|| f.length<=3){
        document.getElementById(finp).style.visibility="visible";
        document.getElementById(idname).style.border="2px solid red";
        return false;
    }
    else if(f==""){
        return false;
    }
    else{
        document.getElementById(finp).style.visibility="hidden";
        document.getElementById(idname).style.border="1px solid";
        return true;
        
    }
}

function Fn(){
    var f = document.getElementById("first").value;
    var m = document.getElementById("middle").value;
    var l = document.getElementById("last").value;
    var fn = f+' '+m+' '+l;
    document.getElementById("fullname").value=fn;
    
}
function Cntry(value){
    if(value.value=='India')
        document.getElementById("phno").placeholder = "9618661633";
    else    
    document.getElementById("phno").placeholder = "XXX-XXX-XXXX";
}
function Phone_Number(){
    var x = document.getElementById("country").value;
    if(x=='India'){
        var phoneno = /^\d{10}$/;
        if((document.getElementById("phno").value.match(phoneno)))
        {
            document.getElementById("pherror1").style.display="none";
            document.getElementById("phno").style.border="1px solid";

            return true;
        }
        else
        {
            document.getElementById("pherror1").style.display="inline";
            document.getElementById("phno").style.border="1px solid red";
            return false;
        }
    }
    else if(x=="USA"){
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(document.getElementById("phno").value.match(phoneno))
        {
            document.getElementById("pherror2").style.display="none";
            document.getElementById("phno").style.border="1px solid";

            return true;
        }
        else
        {
            document.getElementById("pherror2").style.display="inline";
            document.getElementById("phno").style.border="1px solid red";

            return false;
        }
    }   
    else{
        document.getElementById("emptyph").style.display="inline";
        document.getElementById("phno").style.border="1px solid red";
        return false
    }

}
function Show(){
    document.getElementById("password").type="text";
    document.getElementById("eye").style.display="none";
    document.getElementById("noeye").style.display="inline"
}
function Hide(){
    document.getElementById("password").type="password";
    document.getElementById("eye").style.display="inline";
    document.getElementById("noeye").style.display="none";
}
function Passvalid(){
    var p = document.getElementById("password").value;
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(p)){
        document.getElementById("passerror").style.visibility="hidden";
        return true;
    }
    else if(p==""){
        document.getElementById("passerror").style.visibility="visible";

        return false;
    }
    else{
        //alert("No No Plz Enter Valid one")
        document.getElementById("passerror").style.visibility="visible";
        return false
    }
}

function Repassword(){
    if((document.getElementById("password").value)!=(document.getElementById("repassword").value)){
        document.getElementById("repasserror").visibility="visible";
    }
    else{
        document.getElementById("repasserror").visibility="hidden";

    }
}

function Hobby(){
    var checked = document.getElementsByClassName("check");
    var c = 0;
    for(var i=0;i<checked.length;i++){
        if(checked[i].checked){
            c=c+1;
        }
    }
    if(c<2){
        
        return false;
    }
    else{
        return c;
    }
}
// function Filevalidation = () => {
//     const fi = document.getElementById('file');
//     // Check if any file is selected.
//     if (fi.files.length > 0) {
//         for (const i = 0; i <= fi.files.length - 1; i++) {

//             const fsize = fi.files.item(i).size;
//             const file = Math.round((fsize / 1024));
//             // The size of the file.
//             if (file >= 4000) {
//                 alert(
//                   "File too Big, please select a file less than 4mb");
//             } else if (file < 2048) {
//                 alert(
//                   "File too small, please select a file greater than 2mb");
//             } else {
//                 document.getElementById('size').innerHTML = '<b>'
//                 + file + '</b> KB';
//             }
//         }
//     }
// }
function ValidateEmail() 

{
    var m = document.getElementById("mail").value
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(m))
  {
    document.getElementById("mail").style.border="1px solid";
    document.getElementById("mailerror").style.visibility="hidden";

    return (true)
  }
  else if(m==""){
    document.getElementById("mailerror").style.visibility="visible";
    document.getElementById("mail").style.border="1px solid red";
    return false;
  }
  else{
    document.getElementById("mailerror").style.visibility="visible";
    document.getElementById("mail").style.border="1px solid red";
    return false;
  }
}
const checkbox = document.getElementById('click')
checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    var d = document.getElementById("dateofbirth").value;
    const cd = new Date().getFullYear();
    var y = d.split("-");
    var A = cd-y[0];
    document.getElementById("age").innerHTML=A;
  } 
})
function Address(){
    var addr = document.getElementById("address").value;
    // var data="";
    // for(i=0;i<addr.length;i++){
    //     // console.log(typeof(addr[i]));
    //     // console.log(addr[i])
    //     // console.log(Number.isInteger(addr[i]))
    //     if(Number.isInteger(addr[i])){
    //         //document.getElementById("nonumaddress").value=addr[i];
    //         data=data+addr[i];
    //     }
    //     else{
    //         //document.getElementById("nonumaddress").value="";
    //         data=data+"";
    //     }
    // }
    // document.getElementById("nonumaddress").value=data;
    document.getElementById("nonumaddress").value=addr.replace(/[0-9]/g, '');
    
   // alert(data);  
}
function Accept(){
    var c = document.getElementById("accepted").checked;
    if(c){
        document.getElementById("taccept").style.visibility="hidden";

        return true;
    }
    else{
        //alert("Plz accept the terms and conditions");
        document.getElementById("taccept").style.visibility="visible";
        return false;
    }
}
function Confirm(){
    return confirm("Are U sure want to reset")
}
function Submit(){
    if(Hobby() && Accept() && Check("first","finput") && Cntry() && Phone_Number() && Passvalid() && Repassword() && Hobby() && ValidateEmail()  && Address() && Accept()){
        return true;
    }
    else{
        if(!Check("first","finput")){
            Check("first","finput");
            
        }
        if(!Check("middle","minput")){
            Check("first","finput");
            
        }
        if(!Check("last","linput")){
            Check("first","finput");
            
        }
        if(!Phone_Number()){
            Phone_Number();
        }
        if(!Passvalid()){
            Passvalid();
        }
        if(!ValidateEmail()){
            ValidateEmail();
        }
        if(!Accept()){
            Accept();
        }
        return false;
        
    }
    
}
// document.getElementById("mail").addEventListener("keyup",Ouput);
// function Ouput(){
//     var a=document.getElementById("mail").value;
//     //alert(a)
//     document.getElementById("emailid").value=a;
// }

// function Output(){
//     document.getElementById("nonumaddress1").value=a=document.getAnimations("address1").value;
    
//     //document.getElementById("emailid").style.backgroundColor="red";
// }
function Output(idn,inputname){
    document.getElementById(inputname).innerHTML=document.getElementById(idn).value;
}