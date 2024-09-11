// personal.js
function saveInput(){
    const fname=document.getElementById("firstName").value;
    const lname=document.getElementById("lastName").value;
    const contact=document.getElementById("contact").value;
    const email=document.getElementById("email").value;
    const addres=document.getElementById("address").value;
    const fullname=fname+" "+lname
    localStorage.setItem('value1',fullname);
    localStorage.setItem('value2',contact);
    localStorage.setItem('value3',email);
    localStorage.setItem('value4',addres);
    window.location.href="education.html"
}
