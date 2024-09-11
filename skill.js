function saveSkill(){
    const tn=document.getElementById("tech").value;
    const on=document.getElementById("other").value;
   
    
    localStorage.setItem('value12',tn);
    localStorage.setItem('value13',on);
   
   
    window.location.href="certificate.html"
}